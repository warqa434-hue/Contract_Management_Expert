import { Link } from 'react-router-dom';
import { ClipboardCheck, CheckCircle2, ArrowRight, Calendar, FileText, Users, Clock } from 'lucide-react';

export default function ProjectManagementService() {
  const included = [
    'Contract administration and correspondence management',
    'Review and processing of variations, instructions, and RFIs',
    'Preparation and review of monthly progress claims',
    'Meeting facilitation and documentation (site meetings, coordination meetings)',
    'Document control and filing systems setup',
    'Schedule monitoring and extension of time assessment',
    'Change management and approval workflows',
    'Handover preparation and defect management',
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Support',
      description: 'Part-time, task-based, or on-call support that fits your budget and project needs',
    },
    {
      icon: FileText,
      title: 'Contract Compliance',
      description: 'Ensure all variations, claims, and instructions are properly documented and contractually sound',
    },
    {
      icon: Users,
      title: 'Neutral Third Party',
      description: 'Independent perspective that helps bridge gaps between owners, consultants, and contractors',
    },
    {
      icon: Calendar,
      title: 'Stay On Track',
      description: 'Keep your project moving forward with clear documentation and timely decision-making',
    },
  ];

  const suitableFor = [
    {
      title: 'Owners & Developers',
      description: 'You have a project underway but lack in-house project management or contract administration expertise.',
      examples: ['First-time developers', 'SME owners managing construction', 'Investors overseeing remote projects'],
    },
    {
      title: 'Contractors & Subcontractors',
      description: 'You need support managing contract obligations, tracking variations, or preparing claims.',
      examples: ['Small to medium contractors', 'Specialist subcontractors', 'Companies expanding into new project types'],
    },
    {
      title: 'Consultants & Engineers',
      description: 'You need additional resource to support contract administration on complex or time-sensitive projects.',
      examples: ['Engineering consultants', 'Project management firms', 'Supervision consultants'],
    },
  ];

  const approach = [
    {
      title: 'Integrated Support',
      description: 'We work alongside your existing consultants, contractors, or internal teams – not replacing them, but representing you by filling specific gaps in contract knowledge or capacity.',
    },
    {
      title: 'Scalable Engagement',
      description: 'Start with a specific task or challenge, then scale up or down based on project needs and budget.',
    },
    {
      title: 'Focus on Documentation',
      description: 'Good contract management is about documentation. We ensure all instructions, variations, claims, and decisions are properly recorded and contractually sound.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <ClipboardCheck className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Project & Contract Management Support
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mx-auto leading-relaxed">
            Part-time or task-based project and contract management support for owners, developers, contractors, and consultants – keeping your project on time, on budget, and contractually protected.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
            What's Included
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Flexible support services tailored to your project phase and needs. From contract setup to handover, We can step in where you need help most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {included.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {suitableFor.map((audience, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {audience.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {audience.description}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Examples:</p>
                  <ul className="space-y-2">
                    {audience.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-slate-600 flex items-start">
                        <span className="text-slate-400 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
            How We Support Your Project
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            We work with your existing team as an independent resource – filling gaps, supporting peak periods, or handling specialized contract tasks that require focused expertise.
          </p>

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

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Engagement Models
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900">Part-Time Support:</strong> Regular weekly or bi-weekly commitment for ongoing projects
              </p>
              <p>
                <strong className="text-slate-900">Task-Based:</strong> Specific deliverables like variation reviews, claim preparation, or meeting support
              </p>
              <p>
                <strong className="text-slate-900">On-Call Advisory:</strong> Available for urgent questions or document review as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Project Support?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get flexible, expert project and contract management support without the overhead of a full-time hire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/how-i-work"
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
