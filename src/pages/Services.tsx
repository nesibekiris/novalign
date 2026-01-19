import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { DotPattern } from '../components/Visuals';

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'strategy',
      title: 'AI Strategy & Maturity',
      intro:
        'We help organizations understand where they are with AI, where they should go, and how to build capabilities that balance innovation with responsibility.',
      items: [
        'AI maturity assessments and diagnostics.',
        'AI roadmaps aligned with business and public value.',
        'AI operating models, roles and decision-rights for AI.',
      ],
    },
    {
      id: 'governance',
      title: 'AI Governance, Ethics & Literacy',
      intro:
        'We design governance and ethics frameworks that make AI use accountable, transparent and aligned with your values – and we build the literacy to make them real.',
      items: [
        'AI governance frameworks, principles and processes.',
        'Ethical guidelines and review mechanisms across the AI lifecycle.',
        'AI literacy and capability programs for leaders, boards and teams.',
      ],
    },
    {
      id: 'research',
      title: 'Market & Policy Research',
      intro:
        'We bring research-led clarity to AI and technology markets and the evolving policy environment.',
      items: [
        'Research on AI and technology markets, trends and use cases.',
        'Analysis of AI and tech policy and regulatory landscapes.',
        'Reports, explainers, briefings and policy papers.',
      ],
    },
    {
      id: 'policy',
      title: 'Policy & Government Affairs',
      intro:
        'We help organizations engage constructively with regulators, policymakers and ecosystems around AI and technology.',
      items: [
        'AI and tech policy advisory.',
        'Stakeholder mapping and engagement strategies.',
        'Support for consultations, hearings and multi-stakeholder processes.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Services</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stratri works at the intersection of technology, society and policy – helping organizations turn AI governance and responsible technology into strategic advantage.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <DotPattern />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white text-xl font-semibold flex-shrink-0 shadow-md">
                      <div className="absolute inset-0 rounded-full bg-blue-soft/20 blur-lg" />
                      <span className="relative">{index + 1}</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-navy">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.intro}</p>
                  <div className="bg-light rounded-lg p-6">
                    <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">What we offer</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-blue-soft mr-3 flex-shrink-0">•</span>
                          <span className="text-gray-800 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-lg p-8 lg:p-12 shadow-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">Railway – AI Governance & Maturity Framework</h2>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Railway is Stratri's framework for assessing AI maturity and designing governance at the intersection of Technology, Society and Policy.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  It provides a comprehensive approach to understanding where organizations are in their AI journey and building the governance structures, processes, and capabilities they need to move with confidence.
                </p>
                <Button href="/railway" className="bg-white text-navy hover:bg-light">
                  Explore Railway framework
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center bg-light-bg rounded-lg p-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">
              Ready to work together?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how Stratri can help your organization navigate the intersection of technology, society and policy.
            </p>
            <Button href="/connect">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
