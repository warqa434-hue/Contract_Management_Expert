import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Shield, Eye, FileCheck } from 'lucide-react';

export default function HomeBuildersService() {
  const included = [
    'Line-by-line review of your construction contract',
    'Analysis of specifications and Bill of Quantities (BOQ)',
    'Identification of vague clauses, gaps, and missing items',
    'Risk assessment for cost exposure and payment terms',
    'Review of warranties, insurance, and defect liability provisions',
    'Plain-language summary of your obligations and contractor obligations',
    'Recommendations for amendments or clarifications before signing',
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Avoid Cost Surprises',
      description: 'Identify hidden costs, unclear scope, and payment risks before you sign',
    },
    {
      icon: Eye,
      title: 'Know What You\'re Signing',
      description: 'Get a clear understanding of your rights, obligations, and risk exposure',
    },
    {
      icon: FileCheck,
      title: 'Sign with Confidence',
      description: 'Proceed with full knowledge of what the contract commits you to',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Submit Your Documents',
      description: 'Send us your draft contract, specifications, and BOQ (if available)',
    },
    {
      step: '2',
      title: 'Detailed Review',
      description: 'We review the documents and identify risks, gaps, and areas of concern',
    },
    {
      step: '3',
      title: 'Discussion & Report',
      description: 'We discuss findings and I provide a written summary with recommendations',
    },
    {
      step: '4',
      title: 'Support to Sign',
      description: 'Optional support to negotiate amendments or clarifications with the contractor',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FileText className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Contract Review for Home Builders & Individual Owners
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            Before you sign your home building contract, have an expert review it with you. I help owners understand contract terms and conditions, specifications, BOQ scope, payment terms, obligations, exclusions and risks in plain language.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A comprehensive review of your contract package to help you understand what you're signing and protect your investment.
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

            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-xl">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Why This Matters
                  </h3>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Most homeowners sign construction contracts without fully understanding the cost risks, payment terms, or their own obligations.
                    </p>
                    <p>
                      Vague scope definitions, missing BOQ items, and unclear variation clauses can lead to tens of thousands of dirhams in unexpected costs.
                    </p>
                    <p className="font-semibold text-slate-900">
                      A professional review before signing can save you from costly disputes later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-slate-700" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Review Your Contract?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't sign blindly. Get a professional review and understand your contract before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Send Your Contract Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/how-we-work"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105 shadow-lg border border-slate-600"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
