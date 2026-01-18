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
    <div className="min-h-screen bg-light">
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <DiagonalLines />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Railway</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our AI governance and maturity framework
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <CirclePattern />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-16">
            <h2 className="text-3xl font-semibold text-navy mb-6">The Railway metaphor</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Railway framework represents the essential infrastructure that allows organizations to move forward
                with AI – steadily, safely, and in the right direction. Just as a railway provides structure,
                direction, and safety for movement, AI governance and maturity provide the foundation for organizations
                to deploy AI responsibly and effectively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Without proper rails, there's risk of derailment. Without governance and maturity, organizations face
                ethical failures, compliance issues, reputational damage, and missed opportunities. The Railway
                framework helps organizations build the structures, processes, and capabilities they need.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At the heart of Railway is <span className="font-semibold text-navy">RAIL</span> – a comprehensive
                approach covering Risk & Responsibility, Alignment, Insight & Literacy, and Lifecycles & Regulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-light-bg overflow-hidden">
        <NetworkPattern />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">The RAIL framework</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                className="bg-white rounded-lg p-8
                  shadow-[0_4px_0_0_rgba(2,31,91,0.1),0_6px_20px_-4px_rgba(2,31,91,0.15)]
                  hover:shadow-[0_6px_0_0_rgba(128,177,210,0.15),0_10px_28px_-4px_rgba(128,177,210,0.25)]
                  hover:-translate-y-1
                  transition-all duration-300
                  border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0 w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-lg flex items-center justify-center
                    shadow-[0_4px_0_0_#010d2a,0_8px_16px_-4px_rgba(2,31,91,0.4)]">
                    <div className="absolute inset-0 rounded-lg bg-blue-soft/30 blur-lg" />
                    <span className="relative text-4xl font-bold text-white">{pillar.letter}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-navy mb-3">{pillar.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">
              Using Railway in practice
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How we apply the Railway framework in our work with organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-navy mb-3">Maturity Assessments</h3>
              <p className="text-gray-700 leading-relaxed">
                We use the RAIL framework to diagnose where organizations are in their AI journey – identifying
                strengths, gaps, and priorities across risk management, alignment, literacy, and lifecycle governance.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-navy mb-3">Governance Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Railway guides the design of governance structures, ensuring comprehensive coverage of risk,
                alignment, insight, and regulatory dimensions – tailored to organizational context and ambition.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-navy mb-3">Training & Literacy</h3>
              <p className="text-gray-700 leading-relaxed">
                We structure AI literacy programs around RAIL, helping teams understand not just what AI is, but how
                to govern it, align it with values, and navigate the full AI lifecycle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <h2 className="text-3xl font-semibold text-navy mb-4">Apply Railway to your organization</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn how the Railway framework can help you build stronger AI governance, assess your maturity, and
              develop the capabilities you need.
            </p>
            <Button href="/connect">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
