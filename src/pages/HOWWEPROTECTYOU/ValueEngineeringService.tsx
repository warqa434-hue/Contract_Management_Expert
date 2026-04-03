import { Link } from 'react-router-dom';
import { TrendingDown, CheckCircle2, ArrowRight, BarChart3, Zap, Target, DollarSign } from 'lucide-react';

export default function ValueEngineeringService() {
  const included = [
    'Contract and specification deep-dive to identify redundancies and over-specifications',
    'Market and sourcing review exploring alternative materials and procurement strategies',
    'Scope optimization challenging non-value-adding elements without reducing functionality',
    'Risk reallocation restructuring contract risk to reduce contingency and pricing buffers',
    'Innovation and technology proposals for modern methods and tech-enabled processes',
    'Cost-benefit analysis with prioritized recommendations and implementation roadmaps',
    'Revised specifications or BOQ reflecting approved value engineering changes',
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: '15-25% Cost Savings',
      description: 'Proven track record of delivering significant cost reductions without compromising quality',
    },
    {
      icon: Target,
      title: 'Strategic Optimization',
      description: 'Restructure contracts and specifications to unlock hidden cost savings',
    },
    {
      icon: Zap,
      title: 'Innovation & Technology',
      description: 'Introduce modern methods, modular solutions, and efficiency improvements',
    },
    {
      icon: BarChart3,
      title: 'Risk-Adjusted Pricing',
      description: 'Reduce contingencies and pricing buffers through smarter risk allocation',
    },
  ];

  const approach = [
    {
      title: 'For Pre-Tender Projects',
      description: 'Analyze the project brief and proposed specifications before procurement. Identify optimization opportunities and challenge scope assumptions before budgets and contracts are locked in.',
    },
    {
      title: 'For Tender Evaluation',
      description: 'Review bids and contracts post-award, identifying cost reduction opportunities without re-tendering. Negotiate alternative solutions or staged implementation to reduce initial capital outlay.',
    },
    {
      title: 'For Ongoing Projects',
      description: 'Identify and implement value engineering during design development or early construction, when changes are still cost-effective.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingDown className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Value Engineering & Cost Optimization
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            Unlock 15–25% cost savings without compromising quality or safety through strategic contract restructuring, specification optimization, and innovative sourcing.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Comprehensive value engineering review to identify and quantify cost reduction opportunities while maintaining project quality and functionality.
              </p>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">
                Who This Is For
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-slate-100">Homeowners:</strong> Looking to optimize villa budgets before finalizing contracts
                </p>
                <p>
                  <strong className="text-slate-100">Developers:</strong> Seeking strategic cost optimization across design, procurement, and delivery
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-slate-300" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {benefit.description}
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
            Our Approach
          </h2>
          <div className="space-y-6">
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

          <div className="mt-12 bg-gradient-to-br from-slate-700 to-slate-800 text-white p-8 rounded-xl border border-slate-600">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Typical Value Engineering Engagement
            </h3>
            <p className="text-slate-200 text-center leading-relaxed">
              Most value engineering reviews are completed within 2-4 weeks depending on project scope and complexity. Costs typically pay for themselves within weeks through identified savings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
            Ready to Optimize Your Project Costs?
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Get expert value engineering analysis to unlock cost savings without compromising quality or schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Start a Review
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/how-we-work"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all border border-slate-600 shadow-md"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
