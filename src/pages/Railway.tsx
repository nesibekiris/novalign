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
            A route through your technology and AI landscape, not another matrix.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <CirclePattern />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-stratri-divider/50 rounded-sm p-8 lg:p-12 mb-16">
            <h2 className="font-serif text-3xl font-medium text-stratri-dark mb-6">You do not need more boxes. You need a map.</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-stratri-dark/80 leading-relaxed mb-4">
                Many frameworks feel like lab reports: precise, yet difficult to navigate when you are in the middle of real work. Railway starts from a different image: a network of tracks and junctions.
              </p>
              <p className="font-sans text-stratri-dark/80 leading-relaxed mb-4">
                Each line is a part of your organization. Each junction is a decision point. Railway helps you decide where to lay track, where to slow down, and where to build new stations.
              </p>
              <p className="font-sans text-stratri-dark/80 leading-relaxed mb-4">
                Policies, principles, and risk registers matter, but they rarely tell one story. Railway connects them so you can see:
              </p>
              <ul className="space-y-2 mb-4 ml-6">
                <li className="font-sans text-stratri-dark/80 leading-relaxed">What technology and AI you have</li>
                <li className="font-sans text-stratri-dark/80 leading-relaxed">How it is governed</li>
                <li className="font-sans text-stratri-dark/80 leading-relaxed">Who is accountable</li>
                <li className="font-sans text-stratri-dark/80 leading-relaxed">How it evolves as markets and rules shift</li>
              </ul>
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
              What you walk away with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">A shared language for governance</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Across technology, legal, policy, and leadership, everyone speaks the same language when talking about governance challenges and trade-offs.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">A maturity view that is honest enough to act on</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Not aspirational or punitive, but a clear picture of where you are, where the gaps lie, and what to prioritize first.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">A practical rollout roadmap</h3>
              <p className="font-sans text-stratri-dark/80 leading-relaxed">
                Over 18 months and beyond, not a one-off report. A route that evolves as your organization and the landscape around it change.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button href="/connect" variant="outline">Request the Railway guide</Button>
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
