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
      subtitle: 'From scattered pilots to a shared route',
      intro:
        'We help you understand where you truly are in your technology and AI journey. That begins with honest maturity assessments and diagnostics across products, data, governance, and teams. Together, we design roadmaps that connect experimentation with business and public value, and we define operating models, roles, and decision rights so innovation does not outrun responsibility.',
      items: [
        'Technology and AI maturity assessments and diagnostics',
        'Roadmaps aligned with business, societal, and public value',
        'Operating models, roles, and decision rights for responsible use of technology and AI',
      ],
    },
    {
      id: 'governance',
      title: 'AI Governance, Ethics & Literacy',
      subtitle: 'Turning principles into everyday decisions',
      intro:
        'Governance is not a folder of PDFs. It is the set of answers people reach for when something unexpected happens. We co-create governance frameworks, principles, and processes that start from your values and obligations. We then design review mechanisms and literacy programs so leaders, boards, and teams know how to act without freezing innovation.',
      items: [
        'Governance frameworks, principles, and processes for technology and AI',
        'Ethical guidelines and review mechanisms across the full lifecycle',
        'Literacy and capability programs for leaders, boards, and teams',
      ],
    },
    {
      id: 'research',
      title: 'Market & Policy Research',
      subtitle: 'Making sense of shifting markets and rules',
      intro:
        'Technology and policy maps move quickly and rarely in sync. We bring research on technology and AI markets, trends, and use cases together with analysis of regulatory and policy developments. The output is not just long reports but explainers, briefings, and decision papers that help you orient your next move at the crossroads.',
      items: [
        'Research on technology and AI markets, trends, and use cases',
        'Analysis of technology and AI policy and regulatory landscapes',
        'Reports, explainers, briefings, and policy papers',
      ],
    },
    {
      id: 'policy',
      title: 'Policy & Government Affairs',
      subtitle: 'Engaging credibly with the public arena',
      intro:
        'You cannot outsource your voice in debates about technology and AI. We support organizations that need to engage with policymakers, regulators, standards bodies, and wider ecosystems in a way that is informed and constructive. We map stakeholders, prepare you for consultations and hearings, and help align your public positions with what really happens in product and practice.',
      items: [
        'Advisory on technology and AI policy',
        'Stakeholder mapping and engagement strategies',
        'Support for consultations, hearings, and multi-stakeholder processes',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stratri-cream">
      <section className="bg-stratri-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-wide">Services</h1>
          <p className="font-serif text-xl italic text-stratri-cream/80 leading-relaxed mb-4">
            We work where your technology decisions actually happen, not only where the org chart says they should.
          </p>
          <p className="font-sans text-lg text-stratri-cream/70 leading-relaxed">
            Each service is a different way of dealing with the same reality: powerful roads converging without clear signage. We help you put strategy under their feet.
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
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-stratri-dark rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="font-serif text-xl font-medium text-white">{index + 1}</span>
                    </div>
                    <h2 className="font-serif text-3xl font-medium text-stratri-dark">{service.title}</h2>
                  </div>
                  <p className="font-serif text-lg italic text-stratri-dark/60 mb-6 ml-16">{service.subtitle}</p>
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

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-stratri-divider/30">
                    <img
                      src="/illustrations/railway-process.svg"
                      alt="Railway Framework Process"
                      className="w-full"
                    />
                  </div>
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
