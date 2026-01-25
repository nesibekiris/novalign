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
    <div className="min-h-screen bg-stratri-cream">
      <section className="bg-stratri-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-wide">Services</h1>
          <p className="font-sans text-xl text-stratri-cream/80 leading-relaxed">
            Stratri works at the intersection of technology, society and policy – helping organizations turn AI governance and responsible technology into strategic advantage.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <DotPattern />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20 group">
                <div className="bg-white border border-stratri-divider/50 rounded-sm p-8 lg:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-stratri-accent hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="font-serif text-xl font-medium text-white">{index + 1}</span>
                    </div>
                    <h2 className="font-serif text-3xl font-medium text-stratri-dark">{service.title}</h2>
                  </div>
                  <p className="font-sans text-lg text-stratri-dark/80 mb-8 leading-relaxed">{service.intro}</p>
                  <div className="bg-stratri-cream/50 border border-stratri-divider/30 rounded-sm p-6">
                    <h3 className="font-sans text-sm font-semibold text-stratri-dark uppercase tracking-wide mb-4">What we offer</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-stratri-accent mr-3 flex-shrink-0">•</span>
                          <span className="font-sans text-stratri-dark/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20" id="railway">
            <div className="bg-stratri-cream border border-stratri-divider/50 rounded-sm p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-1 bg-stratri-accent/10 border border-stratri-accent/30 rounded-full mb-6">
                    <span className="font-sans text-xs font-medium text-stratri-accent uppercase tracking-wider">Framework</span>
                  </div>
                  <h2 className="font-serif text-4xl font-medium text-stratri-dark mb-4">Railway</h2>
                  <p className="font-serif text-lg italic text-stratri-dark/70 mb-6">
                    AI Governance & Maturity Framework
                  </p>
                  <p className="font-sans text-stratri-dark/80 leading-relaxed mb-6">
                    Railway treats governance as the rail infrastructure that lets organizations move with confidence at the intersection of technology, society and policy. Just as a railway provides structure, direction, and safety for movement, AI governance provides the foundation for organizations to deploy technology responsibly and strategically.
                  </p>
                  <p className="font-sans text-stratri-dark/80 leading-relaxed mb-8">
                    At the heart of Railway is <span className="font-semibold text-stratri-dark">RAIL</span> – a comprehensive approach covering Risk & Responsibility, Alignment, Insight & Literacy, and Lifecycles & Regulation.
                  </p>
                  <Button href="/services/railway" variant="primary">
                    Explore Railway framework
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="group/rail flex items-start gap-4 p-5 bg-white border border-stratri-divider/50 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-stratri-accent hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover/rail:scale-110 group-hover/rail:rotate-3">
                      <span className="font-serif text-2xl font-medium text-white">R</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-stratri-dark mb-1 uppercase tracking-wide">Risk & Responsibility</h3>
                      <p className="font-sans text-xs text-stratri-dark/70 leading-relaxed">
                        Identifying, assessing and managing risks across the AI lifecycle with clear accountability.
                      </p>
                    </div>
                  </div>

                  <div className="group/rail flex items-start gap-4 p-5 bg-white border border-stratri-divider/50 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-stratri-accent hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover/rail:scale-110 group-hover/rail:rotate-3">
                      <span className="font-serif text-2xl font-medium text-white">A</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-stratri-dark mb-1 uppercase tracking-wide">Alignment</h3>
                      <p className="font-sans text-xs text-stratri-dark/70 leading-relaxed">
                        Ensuring AI systems align with organizational values, strategic objectives, and societal interests.
                      </p>
                    </div>
                  </div>

                  <div className="group/rail flex items-start gap-4 p-5 bg-white border border-stratri-divider/50 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-stratri-accent hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover/rail:scale-110 group-hover/rail:rotate-3">
                      <span className="font-serif text-2xl font-medium text-white">I</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-stratri-dark mb-1 uppercase tracking-wide">Insight & Literacy</h3>
                      <p className="font-sans text-xs text-stratri-dark/70 leading-relaxed">
                        Developing AI literacy across leadership and teams to make informed decisions.
                      </p>
                    </div>
                  </div>

                  <div className="group/rail flex items-start gap-4 p-5 bg-white border border-stratri-divider/50 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-stratri-accent hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover/rail:scale-110 group-hover/rail:rotate-3">
                      <span className="font-serif text-2xl font-medium text-white">L</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-stratri-dark mb-1 uppercase tracking-wide">Lifecycles & Regulation</h3>
                      <p className="font-sans text-xs text-stratri-dark/70 leading-relaxed">
                        Managing AI across its full lifecycle while navigating the evolving regulatory landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center bg-white border border-stratri-divider/50 rounded-sm p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stratri-dark mb-4">
              Ready to work together?
            </h2>
            <p className="font-sans text-lg text-stratri-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how Stratri can help your organization navigate the intersection of technology, society and policy.
            </p>
            <Button href="/connect" variant="primary">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
