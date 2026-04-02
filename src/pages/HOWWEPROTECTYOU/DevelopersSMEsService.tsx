import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, ArrowRight, TrendingDown, Users, FileWarning, ClipboardCheck } from 'lucide-react';

export default function DevelopersSMEsService() {
  const included = [
    'Pre-award contract review (conditions, specifications, BOQ, drawings)',
    'Risk and opportunity analysis before tender submission',
    'Review of contract amendments, addenda, and tender clarifications',
    'Assessment of dispute resolution mechanisms and liability caps',
    'Coordination requirements, insurance, and bonds review',
    'Identification of vague or unbalanced clauses in employer-drafted contracts',
    'Written summary with strategic recommendations for negotiation',
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Claims & Variations',
      description: 'Identify ambiguities and gaps in the contract before construction starts',
    },
    {
      icon: Users,
      title: 'Stronger Negotiation Position',
      description: 'Enter commercial discussions armed with a detailed understanding of risk allocation',
    },
    {
      icon: FileWarning,
      title: 'Avoid Costly Mistakes',
      description: 'Catch unbalanced clauses, missing items, and risk transfer issues early',
    },
    {
      icon: ClipboardCheck,
      title: 'Better Project Delivery',
      description: 'Start with a clear, complete contract foundation that supports smooth execution',
    },
  ];

  const approach = [
    {
      title: 'Pre-Tender Review',
      description: 'We analyze the full contract package (drawings, specs, BOQ, general and special conditions) before you submit your bid – helping you understand what you\'re pricing and what risks you\'re accepting.',
    },
    {
      title: 'Post-Award / Pre-Execution',
      description: 'After contract award, We help review final contract documents, coordinate startup requirements, and set up contract administration systems.',
    },
    {
      title: 'Commercial & Technical Alignment',
      description: 'We work at the intersection of commercial and technical delivery – making sure your contract, design, and execution strategy are aligned.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Building2 className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Contract & Tender Review for Developers
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            Structured review of tender documents, contract conditions, specifications, and BOQ to identify risks, gaps, ambiguities and cost exposures before contract award.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A comprehensive pre-award or post-award review of your contract package to identify risks, ambiguities, and opportunities before you commit or mobilize.
              </p>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Who This Is For
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Developers:</strong> Owners and employers preparing to award contracts for commercial or residential projects
                </p>
                <p>
                  <strong className="text-slate-900">Development Managers:</strong> Teams coordinating multiple packages and needing tighter risk control before award
                </p>
                <p>
                  <strong className="text-slate-900">Investor-Led Projects:</strong> Private investors and family offices requiring an independent contract risk review
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-slate-700" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Approach
          </h2>
          <div className="space-y-6">
            {approach.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Typical Timeline
            </h3>
            <p className="text-slate-200 text-center leading-relaxed">
              Most contract reviews are completed within 3-7 business days depending on project size and complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Get a Clear Understanding Before You Sign
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're about to bid, negotiate, or sign – get expert contract review to identify risks and strengthen your position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg hover:from-slate-600 hover:to-slate-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Review
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all border border-slate-300 hover:border-slate-400 shadow-md"
            >
              View Project Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
