import { Link } from 'react-router-dom';
import { Building2, Home, Hotel, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PortfolioPage() {
  const { t, dir } = useLanguage();

  const projects = [
    {
      icon: Home,
      category: 'Residential Villa',
      title: 'Contract Review for Private Villa Owner',
      location: 'Abu Dhabi',
      description: 'Pre-signing review of construction contract and specifications for a private villa project. Identified missing scope items in BOQ, vague payment terms, and unclear defect liability provisions.',
      outcome: 'Owner negotiated amendments to clarify payment schedule, add missing items to BOQ, and extend defect liability period. Avoided potential cost exposure of over AED 150,000.',
      tags: ['Contract Review', 'Residential', 'Pre-Award'],
    },
    {
      icon: Building2,
      category: 'High-Rise Residential',
      title: 'EOT Claim Assessment for Developer',
      location: 'Dubai',
      description: 'Assessment of contractor EOT claim for a 15-story residential tower. Contractor claimed 120 days extension due to employer variations and consultant delays.',
      outcome: 'Identified that 60 days were valid based on contract terms, 40 days were contractor-caused, and 20 days required additional documentation. Helped client negotiate final settlement of 45-day EOT with no cost impact.',
      tags: ['Claims', 'High-Rise', 'EOT Assessment'],
    },
    {
      icon: Hotel,
      category: 'Commercial',
      title: 'Part-Time Contract Administration Support',
      location: 'Abu Dhabi',
      description: 'Part-time contract administration support for boutique semi-government renovation project. Managed contractor correspondence, processed variations, facilitated site meetings, and prepared monthly progress reports.',
      outcome: 'Project completed 2 weeks ahead of schedule with zero contractual disputes. All variations properly documented and approved. Owner gained full visibility and control over project delivery.',
      tags: ['Project Management', 'Commercial', 'Contract Admin'],
    },
    {
      icon: ShoppingBag,
      category: 'Retail Fit-Out',
      title: 'Pre-Award Contract Review for Retail Developer',
      location: 'Dubai',
      description: 'Pre-tender review of contract conditions, specifications, and BOQ for shopping mall retail fit-out tender. Identified unbalanced risk allocation, incomplete scope definition, and missing coordination requirements.',
      outcome: 'Developer issued clarifications addressing key risks before tender award. Project moved into delivery with a clearer contract foundation and minimal variations.',
      tags: ['Contract Review', 'Commercial', 'Pre-Tender'],
    },
    {
      icon: Building2,
      category: 'Office Development',
      title: 'Variation Claim Preparation',
      location: 'Abu Dhabi',
      description: 'Preparation and assessment of a major variation claim on an office development project. Scope changes required additional HVAC equipment and modified fire protection systems.',
      outcome: 'Prepared fully documented variation submission with contractual basis, cost breakdown, and programme impact. Claim approved for AED 320,000 with 15-day EOT.',
      tags: ['Variations', 'Commercial', 'Claim Preparation'],
    },
    {
      icon: Home,
      category: 'Townhouse Development',
      title: 'Contract Setup & Monthly Monitoring',
      location: 'Abu Dhabi',
      description: 'Contract setup and ongoing monthly support for SME developer building 16-unit townhouse development. Established contract administration procedures, payment certification process, and variation management system.',
      outcome: 'Developer gained full control over contract performance with clear documentation and timely decision-making. Project delivered on time with all contractual obligations met.',
      tags: ['Project Management', 'Residential', 'SME Support'],
    },
  ];

  const metrics = [
    { number: t.portfolio.metrics.projects, label: t.portfolio.metrics.projectsLabel },
    { number: t.portfolio.metrics.value, label: t.portfolio.metrics.valueLabel },
    { number: t.portfolio.metrics.satisfaction, label: t.portfolio.metrics.satisfactionLabel },
    { number: t.portfolio.metrics.experience, label: t.portfolio.metrics.experienceLabel },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.portfolio.title}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-md text-center border border-slate-700">
                <div className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">
                  {metric.number}
                </div>
                <div className="text-slate-400 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              {t.portfolio.examples.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t.portfolio.examples.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl shadow-md border border-slate-700 overflow-hidden">
                  <div className="p-8 sm:p-10">
                    <div className={`flex flex-col sm:flex-row sm:items-start space-y-6 sm:space-y-0 ${dir === 'rtl' ? 'sm:space-x-reverse' : ''} sm:space-x-8`}>
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                          <Icon className="text-slate-300" size={32} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3 mb-3`}>
                          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                            {project.category}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-sm text-slate-400">
                            {project.location}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-100 mb-4">
                          {project.title}
                        </h3>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                            {t.portfolio.projectDetailsLabel}
                          </h4>
                          <p className="text-slate-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className={`bg-green-950 border-${dir === 'rtl' ? 'r' : 'l'}-4 border-green-600 p-5 rounded-${dir === 'rtl' ? 'l' : 'r'}-lg mb-6`}>
                          <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-3`}>
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            <div>
                              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide mb-2">
                                {t.portfolio.outcomeLabel}
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                {project.outcome}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 p-8 sm:p-12 rounded-xl shadow-lg border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 text-center">
              {t.portfolio.confidentiality.title}
            </h2>
            <p className="text-slate-400 leading-relaxed text-center">
              {t.portfolio.confidentiality.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.portfolio.cta.title}
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.portfolio.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.common.contactUs}
              <ArrowRight className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} size={20} />
            </Link>
            <Link
              to="/HOW WE PROTECT YOU"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105 shadow-lg border border-slate-600"
            >
              {t.common.viewServices}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
