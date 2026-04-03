import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, ArrowRight, FileText, Calculator, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ClaimsVariationsService() {
  const included = [
    'Review of contract terms to assess entitlement for claims or variations',
    'Analysis of supporting documentation (site records, correspondence, schedules)',
    'Preparation or assessment of Extension of Time (EOT) claims',
    'Preparation or assessment of cost claims and variations',
    'Structuring of claim narratives with contractual basis',
    'Support for negotiation strategy and commercial discussions',
    'Review of contractor claims for owners and employers',
    'Independent expert opinion on disputed claims',
  ];

  const services = [
    {
      icon: FileText,
      title: 'Claim Preparation',
      description: 'For Homeowners & Developers',
      details: 'We help clients structure and document claims for delays, variations, or additional costs - ensuring they are contractually sound and supported by evidence.',
    },
    {
      icon: Calculator,
      title: 'Claim Assessment',
      description: 'For Owners & Employers',
      details: 'We review contractor claims to assess validity, quantum, and entitlement – helping owners respond appropriately and protect their position.',
    },
    {
      icon: MessageSquare,
      title: 'Variation Management',
      description: 'For Homeowners & Developers',
      details: 'Support for pricing, negotiating, and documenting variations to minimize disputes and ensure fair compensation.',
    },
    {
      icon: ShieldCheck,
      title: 'Dispute Advisory',
      description: 'For Homeowners & Developers',
      details: 'Independent analysis and strategy for managing construction disputes, including preparation for mediation or adjudication.',
    },
  ];

  const approach = [
    {
      title: 'Contract-First Analysis',
      description: 'Every claim starts with the contract. We analyze the specific contract terms, conditions precedent, notice requirements, and entitlement criteria before building the claim or response.',
    },
    {
      title: 'Evidence-Based Documentation',
      description: 'Claims must be supported by records. We help you organize site records, correspondence, schedules, and technical documentation to build a credible narrative.',
    },
    {
      title: 'Commercial Pragmatism',
      description: 'Not every dispute needs to escalate. We help you assess when to negotiate, when to stand firm, and when to seek alternative resolution.',
    },
  ];

  const when = [
    'You received a delay claim or variation claim from your contractor and need an independent assessment',
    'You believe you are entitled to an EOT or additional cost but unsure how to structure the claim',
    'You are facing disputed variations and need independent analysis of entitlement',
    'Your project is behind schedule and you need to prepare or respond to delay claims',
    'You want to avoid disputes by properly documenting variations as they occur',
    'You need expert support preparing for mediation, adjudication, or expert determination',
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Scale className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Claims & Variations Advisory
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            Expert support to prepare, assess, or respond to construction claims, variations, and Extension of Time (EOT) requests – for both Developers and owners.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6 text-center">
              What's Included
            </h2>
            <p className="text-lg text-slate-400 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for managing claims and variations throughout the project lifecycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-700">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-slate-300" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 font-medium">
                    {service.description}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            My Approach to Claims
          </h2>
          <div className="space-y-6 mb-12">
            {approach.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-amber-950 border-l-4 border-amber-500 p-8 rounded-r-xl">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">
              Important Note
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We are not lawyers and do not provide legal advice. Our role is to analyze claims from a project management and contract administration perspective, focusing on technical entitlement and commercial strategy. For legal disputes or litigation, you should engage qualified legal counsel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
            When to Engage This Service
          </h2>
          <div className="space-y-4">
            {when.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-700">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Claims or Variations Support?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get expert analysis and structured support for preparing or assessing construction claims and variations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Request Support
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105 shadow-lg border border-slate-600"
            >
              View Case Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
