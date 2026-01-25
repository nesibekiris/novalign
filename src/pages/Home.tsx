import { Button } from '../components/Button';
import { PillarCard, InsightCard } from '../components/Card';
import { Newsletter } from '../components/Newsletter';
import { GridPattern, GeometricShapes, DotPattern, CirclePattern } from '../components/Visuals';
import { HeroIllustration, AlignmentNodes } from '../components/ThreeDVisuals';
import { ArrowDown, Linkedin, BookOpen } from 'lucide-react';

export function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      title: 'AI Strategy & Maturity',
      points: [
        'AI maturity assessments and diagnostics.',
        'AI roadmaps aligned with business and public value.',
        'AI operating models, roles and decision-rights for AI.',
      ],
      link: '/services#strategy',
    },
    {
      title: 'AI Governance, Ethics & Literacy',
      points: [
        'AI governance frameworks, principles and processes.',
        'Ethical guidelines and review mechanisms across the AI lifecycle.',
        'AI literacy and capability programs for leaders, boards and teams.',
      ],
      link: '/services#governance',
    },
    {
      title: 'Market & Policy Research',
      points: [
        'Research on AI and technology markets, trends and use cases.',
        'Analysis of AI and tech policy and regulatory landscapes.',
        'Reports, explainers, briefings and policy papers.',
      ],
      link: '/services#research',
    },
    {
      title: 'Policy & Government Affairs',
      points: [
        'AI and tech policy advisory.',
        'Stakeholder mapping and engagement strategies.',
        'Support for consultations, hearings and multi-stakeholder processes.',
      ],
      link: '/services#policy',
    },
  ];

  const insights = [
    {
      title: 'Understanding AI Governance Frameworks',
      summary: 'A deep dive into building effective AI governance structures that balance innovation with accountability and ethical considerations.',
      category: 'AI Governance',
      date: 'January 15, 2026',
      slug: 'understanding-ai-governance-frameworks',
    },
    {
      title: 'The Evolution of AI Policy in 2026',
      summary: 'Analyzing key regulatory developments across jurisdictions and what they mean for organizations deploying AI systems.',
      category: 'AI Policy',
      date: 'January 10, 2026',
      slug: 'evolution-of-ai-policy-2026',
    },
  ];

  const trainings = [
    {
      title: 'AI Governance & Ethics for Boards',
      outcome: 'Equip board members to ask the right questions.',
    },
    {
      title: 'AI Policy & Regulation for Product and Policy Teams',
      outcome: 'Understand the rules shaping your roadmap.',
    },
    {
      title: 'AI Literacy for Non-Technical Leaders',
      outcome: 'Demystify AI to make better strategic decisions.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-sans font-medium text-stratri-dark/60 mb-6 tracking-widest uppercase">
              Technology Policy & AI governance Consultancy
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-stratri-dark mb-8 leading-tight uppercase">
              Technology. Society. Policy. Strategized.
            </h1>
            <p className="text-lg font-sans text-stratri-dark/70 mb-12 leading-relaxed max-w-2xl">
              Stratri works at the intersection of technology, society and policy – turning AI governance and responsible technology into a strategic advantage. We believe that governance and ethics are not constraints, but the foundation for sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/connect">Let's talk</Button>
              <Button variant="outline" href="/insights">
                Explore insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stratri-light/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm p-8 border border-stratri-divider">
              <div className="flex items-start gap-4">
                <Linkedin className="text-stratri-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm font-sans text-stratri-dark/80 mb-3">
                    <span className="font-medium">You discovered Stratri on LinkedIn.</span> Here's how we help organizations navigate the intersection of technology, society and policy.
                  </p>
                  <button
                    onClick={() => scrollToSection('what-we-do')}
                    className="inline-flex items-center text-sm font-sans font-medium text-stratri-accent hover:text-stratri-dark transition-colors"
                  >
                    See what we do <ArrowDown size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-6 uppercase">What we do</h2>
            <p className="text-lg font-sans text-stratri-dark/70 max-w-3xl mx-auto">
              Four core pillars where technology, society and policy converge into strategic advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-4 uppercase">How we work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-stratri-accent flex items-center justify-center font-serif text-2xl font-medium text-stratri-accent mx-auto mb-6">
                1
              </div>
              <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Diagnose</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                Understand context, risks, opportunities and AI maturity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-stratri-accent flex items-center justify-center font-serif text-2xl font-medium text-stratri-accent mx-auto mb-6">
                2
              </div>
              <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Design</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                Co-create strategy, governance, ethics and policy frameworks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-stratri-accent flex items-center justify-center font-serif text-2xl font-medium text-stratri-accent mx-auto mb-6">
                3
              </div>
              <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Embed</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                Implement through trainings, AI literacy, documentation and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-3 uppercase">Latest from Stratri</h2>
              <p className="font-sans text-stratri-dark/70">Deep thinking on AI governance, responsible technology and policy.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}

            <div className="bg-stratri-dark rounded-sm p-10 text-white flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <BookOpen size={32} className="text-stratri-light" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4">Techletter</h3>
                <p className="font-sans text-white/80 leading-relaxed mb-6">
                  Stratri's newsletter on AI governance, responsible technology, policy and literacy. Deep dives delivered to your inbox.
                </p>
              </div>
              <div className="pt-4">
                <Button href="/insights" className="bg-white text-stratri-dark hover:bg-stratri-cream">
                  Read Techletter
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" href="/insights">View all insights</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-12 text-center uppercase">AI literacy & trainings</h2>
            <div className="bg-stratri-cream rounded-sm p-10 border border-stratri-divider mb-8">
              <div className="space-y-8">
                {trainings.map((training, index) => (
                  <div key={index} className="pb-8 last:pb-0 border-b last:border-b-0 border-stratri-divider">
                    <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">{training.title}</h3>
                    <p className="font-sans text-stratri-dark/70 leading-relaxed">{training.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" href="/services#governance">
                See all trainings
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
