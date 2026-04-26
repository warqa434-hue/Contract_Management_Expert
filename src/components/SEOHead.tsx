import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  lang?: string;
}

const SITE_NAME = 'BCX – Building Contract Expert';
const BASE_URL = 'https://bcx.ae';
const OG_IMAGE = `${BASE_URL}/elitefix-hero-001.jpg`;

export default function SEOHead({ title, description, path = '/', lang = 'en' }: SEOHeadProps) {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = `${title} | BCX`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_AE' : 'en_AE'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:site" content="@bcx.ae" />
    </Helmet>
  );
}
