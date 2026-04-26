import https from 'node:https';

const GA_MEASUREMENT_ID =
  process.env.GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID || '';
const GA4_API_SECRET = process.env.GA4_API_SECRET || '';

function sendToGA4(label, lang, sid) {
  if (!GA_MEASUREMENT_ID || !GA4_API_SECRET) return;
  const payload = JSON.stringify({
    client_id: sid || 'anonymous',
    events: [{ name: 'whatsapp_opened', params: { label, lang, sid, engagement_time_msec: '1' } }],
  });
  const req = https.request({
    hostname: 'www.google-analytics.com',
    path: `/mp/collect?measurement_id=${encodeURIComponent(GA_MEASUREMENT_ID)}&api_secret=${encodeURIComponent(GA4_API_SECRET)}`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) },
  }, (res) => res.resume());
  req.on('error', (err) => console.error(JSON.stringify({ event: 'ga4_mp_error', message: err.message })));
  req.write(payload);
  req.end();
}

// GET /track/whatsapp?url=<encoded_wa_url>&label=<label>&lang=<lang>&sid=<session_id>
// Logs the open, sends to GA4 Measurement Protocol, then 302 → wa.me.
export function trackingMiddleware(req, res) {
  const parsed = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const rawUrl = parsed.searchParams.get('url');
  const label  = parsed.searchParams.get('label') || 'unknown';
  const lang   = parsed.searchParams.get('lang')  || 'en';
  const sid    = parsed.searchParams.get('sid')   || '';

  if (!rawUrl) {
    res.statusCode = 400;
    res.end('Missing url');
    return;
  }

  let destination;
  try {
    destination = decodeURIComponent(rawUrl);
    const { hostname } = new URL(destination);
    if (!['wa.me', 'www.wa.me', 'api.whatsapp.com'].includes(hostname)) throw new Error();
  } catch {
    res.statusCode = 400;
    res.end('Invalid url');
    return;
  }

  console.log(JSON.stringify({
    event: 'whatsapp_opened', label, lang, sid,
    ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0].trim(),
    server_ts: new Date().toISOString(),
  }));

  sendToGA4(label, lang, sid);

  res.statusCode = 302;
  res.setHeader('Location', destination);
  res.setHeader('Cache-Control', 'no-store');
  res.end();
}
