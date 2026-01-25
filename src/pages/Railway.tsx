import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { NetworkPattern, DiagonalLines, CirclePattern } from '../components/Visuals';
import { RailwayFrameworkVisual } from '../components/ThreeDVisuals';

export function Railway() {
  const railFramework = [
    {
      letter: 'R',
      title: 'Risk & Responsibility',
      description:
        'Identifying, assessing and managing risks across the AI lifecycle. Establishing clear ownership, accountability structures, and decision-making processes that ensure responsible AI deployment.',
    },
    {
      letter: 'A',
      title: 'Alignment',
      description:
        'Ensuring AI systems are aligned with organizational values, strategic objectives, and societal interests. Building governance frameworks that connect technical choices to ethical principles and business outcomes.',
    },
    {
      letter: 'I',
      title: 'Insight & Literacy',
      description:
        'Developing AI literacy across leadership and teams. Creating the knowledge base and analytical capabilities needed to understand AI systems, ask the right questions, and make informed decisions.',
    },
    {
      letter: 'L',
      title: 'Lifecycles & Regulation',
      description:
        'Managing AI across its full lifecycle – from design through deployment to retirement. Understanding and navigating the evolving regulatory landscape, compliance requirements, and policy implications.',
    },
  ];

  return (
    <div className="min-h-screen bg-stratri-cream">
      <section className="relative bg-stratri-dark text-white py-20 overflow-hidden">
        <DiagonalLines />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-wide">Railway</h1>
          <p className="font-serif text-xl italic text-stratri-cream/80 leading-relaxed">
            Stratri's AI Governance & Maturity Framework
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <CirclePattern />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-stratri-divider/50 rounded-sm p-8 lg:p-12 mb-16">
            <h2 className="font-serif text-3xl font-medium text-stratri-dark mb-6">The Railway metaphor</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-stratri-dark/80 leading-relaxed mb-4">
                Railway is Stratri's framework for AI governance and maturity. It treats governance as the rail infrastructure that lets organizations move with confidence at the intersection of technology, society and policy. Just as a railway provides structure, direction, and safety for movement, AI governance provides the foundation for organizations to deploy technology responsibly and strategically.
              </p>
              <p className="font-sans text-stratri-dark/80 leading-relaxed mb-4">
                Without proper rails, there's risk of derailment. Without governance and maturity, organizations face ethical failures, compliance issues, reputational damage, and missed opportunities. Railway helps organizations build the structures, processes, and capabilities they need to turn responsible technology into competitive advantage.
              </p>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                At the heart of Railway is <span className="font-semibold text-stratri-dark">RAIL</span> – a comprehensive approach covering Risk & Responsibility, Alignment, Insight & Literacy, and Lifecycles & Regulation. These four pillars enable strategic governance across the technology-society-policy triad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <NetworkPattern />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stratri-dark mb-4">The RAIL framework</h2>
            <p className="font-sans text-lg text-stratri-dark/80 max-w-3xl mx-auto">
              Four interconnected pillars for comprehensive AI governance and maturity.
            </p>
          </div>

          <div className="mb-16">
            <RailwayFrameworkVisual />
          </div>

          <div className="space-y-6">
            {railFramework.map((pillar, index) => (
              <div
                key={index}
                className="bg-stratri-cream border border-stratri-divider/50 rounded-sm p-8
                  hover:border-stratri-accent/50 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-stratri-dark rounded-sm flex items-center justify-center">
                    <span className="font-serif text-4xl font-medium text-white">{pillar.letter}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-3">{pillar.title}</h3>
                    <p className="font-sans text-stratri-dark/80 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stratri-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stratri-dark mb-4">
              Using Railway in practice
            </h2>
            <p className="font-sans text-lg text-stratri-dark/80 max-w-3xl mx-auto">
              How we apply the Railway framework in our work with organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">Maturity Assessments</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Stratri uses the RAIL framework to assess where organizations are in their AI journey – identifying strengths, gaps, and priorities across risk management, alignment, literacy, and lifecycle governance.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">Governance Design</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Railway guides the design of governance structures, ensuring comprehensive coverage of risk, alignment, insight, and regulatory dimensions – tailored to organizational context and strategic ambition.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">Training & Literacy</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Stratri structures AI literacy programs around RAIL, helping teams understand how to govern technology, align it with values, and navigate the full AI lifecycle across technology, society and policy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-stratri-cream border border-stratri-divider/50 rounded-sm p-12">
            <h2 className="font-serif text-3xl font-medium text-stratri-dark mb-4">Apply Railway to your organization</h2>
            <p className="font-sans text-lg text-stratri-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn how Stratri's Railway framework can help you build stronger AI governance, assess your maturity, and develop the capabilities you need to thrive at the intersection of technology, society and policy.
            </p>
            <Button href="/connect" variant="primary">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
