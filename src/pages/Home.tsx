import { Button } from '../components/Button';
import { PillarCard, InsightCard } from '../components/Card';
import { Newsletter } from '../components/Newsletter';
import { GridPattern, GeometricShapes, DotPattern, CirclePattern } from '../components/Visuals';
import { HeroIllustration, AlignmentNodes } from '../components/ThreeDVisuals';
import { TechnologyIcon, PolicyIcon, SocietyIcon, StrategyIcon, GovernanceIcon, ResearchIcon, PolicyAffairsIcon } from '../components/Icons';
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
      subtitle: 'From scattered pilots to a shared route.',
      icon: <StrategyIcon className="w-full h-full" />,
      points: [
        'Technology and AI maturity assessments and diagnostics',
        'Roadmaps aligned with business, societal, and public value',
        'Operating models, roles, and decision rights for responsible use of technology and AI',
      ],
      link: '/services#strategy',
    },
    {
      title: 'AI Governance, Ethics & Literacy',
      subtitle: 'Turning principles into everyday decisions.',
      icon: <GovernanceIcon className="w-full h-full" />,
      points: [
        'Governance frameworks, principles, and processes for technology and AI',
        'Ethical guidelines and review mechanisms across the full lifecycle',
        'Literacy and capability programs for leaders, boards, and teams',
      ],
      link: '/services#governance',
    },
    {
      title: 'Market & Policy Research',
      subtitle: 'Making sense of shifting markets and rules.',
      icon: <ResearchIcon className="w-full h-full" />,
      points: [
        'Research on technology and AI markets, trends, and use cases',
        'Analysis of technology and AI policy and regulatory landscapes',
        'Reports, explainers, briefings, and policy papers',
      ],
      link: '/services#research',
    },
    {
      title: 'Policy & Government Affairs',
      subtitle: 'Engaging credibly with the public arena.',
      icon: <PolicyAffairsIcon className="w-full h-full" />,
      points: [
        'Advisory on technology and AI policy',
        'Stakeholder mapping and engagement strategies',
        'Support for consultations, hearings, and multi-stakeholder processes',
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
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-stratri-dark mb-8 leading-tight">
              At the crossroads of technology, policy, and society
            </h1>
            <p className="text-xl font-sans text-stratri-dark/70 mb-6 leading-relaxed">
              STRATRI helps you turn that junction into strategy: a stable ground where innovation, rules, and impact finally align.
            </p>
            <p className="text-lg font-sans text-stratri-dark/70 mb-12 leading-relaxed max-w-2xl">
              In every organization, new technology now sits at a trivium. Product wants to move, policy wants to protect, society reacts in real time. We work in the middle of that intersection so you do not have to choose one road at the expense of the others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#how-we-work">Explore how we work</Button>
              <Button variant="outline" href="/connect">
                Talk to STRATRI
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-[#9FB7C8]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-6">Three roads. One decision point.</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg font-sans text-stratri-dark/70 leading-relaxed">
                Most teams no longer make technology decisions from a single vantage point. Engineers, policy teams, executives, and communities all pull in different directions.
              </p>
              <p className="text-lg font-sans text-stratri-dark/70 leading-relaxed">
                We treat your organization as a living junction of three roads:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <TechnologyIcon className="w-full h-full" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-stratri-dark mb-2">Technology</h3>
              <p className="font-sans text-sm text-stratri-dark/70">Systems, products, data, models</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <PolicyIcon className="w-full h-full" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-stratri-dark mb-2">Policy</h3>
              <p className="font-sans text-sm text-stratri-dark/70">Law, regulation, internal rules</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <SocietyIcon className="w-full h-full" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-stratri-dark mb-2">Society</h3>
              <p className="font-sans text-sm text-stratri-dark/70">Users, workers, citizens, public trust</p>
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg font-sans text-stratri-dark/70 leading-relaxed">
              STRATRI sits where those roads meet and helps you design how they move together instead of against each other.
            </p>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-6">We do not ask you to pick a road. We help you design the junction.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="relative py-24 overflow-hidden bg-gradient-to-b from-[#9FB7C8]/5 to-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-4">How we work at the crossroads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="w-16 h-16 rounded-sm bg-[#184A5A] flex items-center justify-center font-serif text-2xl font-medium text-white mb-6">
                1
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#184A5A] mb-4">Recognize the junctions</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                We start by surfacing where innovation actually lives in your organization. Not just in strategy decks, but in products, workflows, relationships, and quiet experiments.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-sm bg-[#184A5A] flex items-center justify-center font-serif text-2xl font-medium text-white mb-6">
                2
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#184A5A] mb-4">Design the stratum</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                Together, we build the strategic ground: governance structures, roles, workflows, and narratives that connect technology, policy, and society into one coherent route instead of three competing ones.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-sm bg-[#184A5A] flex items-center justify-center font-serif text-2xl font-medium text-white mb-6">
                3
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#184A5A] mb-4">Embed and iterate</h3>
              <p className="font-sans text-stratri-dark/70 leading-relaxed">
                Governance only works if people use it. We stay close as you roll out, adjust to regulation and market pressure, and learn from real cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stratri-light/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-6">For teams who cannot afford "wait and see"</h2>
          </div>
          <div className="bg-white border border-stratri-divider/50 rounded-sm p-8 lg:p-10">
            <p className="font-sans text-lg text-stratri-dark/70 leading-relaxed mb-6">
              STRATRI works with organizations that move at the intersection of innovation, rules, and public expectation. That includes:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-stratri-accent mr-3 flex-shrink-0 font-serif text-lg">•</span>
                <span className="font-sans text-stratri-dark/70 leading-relaxed">Technology companies moving from experiments to real products and platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-stratri-accent mr-3 flex-shrink-0 font-serif text-lg">•</span>
                <span className="font-sans text-stratri-dark/70 leading-relaxed">Organizations in retail technologies, industrial and manufacturing, AI, fintech, ecommerce, healthtech, and crypto that are reshaping their business through technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-stratri-accent mr-3 flex-shrink-0 font-serif text-lg">•</span>
                <span className="font-sans text-stratri-dark/70 leading-relaxed">Venture investors and platforms that need a grounded view on risk, governance, and public perception</span>
              </li>
              <li className="flex items-start">
                <span className="text-stratri-accent mr-3 flex-shrink-0 font-serif text-lg">•</span>
                <span className="font-sans text-stratri-dark/70 leading-relaxed">Public institutions facing new obligations and scrutiny</span>
              </li>
              <li className="flex items-start">
                <span className="text-stratri-accent mr-3 flex-shrink-0 font-serif text-lg">•</span>
                <span className="font-sans text-stratri-dark/70 leading-relaxed">Civil society and ecosystem actors who help define the rules of the game</span>
              </li>
            </ul>
            <p className="font-sans text-lg text-stratri-dark leading-relaxed italic">
              If you sit somewhere between "we cannot ship this" and "we cannot stop now", you are in the right place.
            </p>
          </div>
          <div className="text-center mt-12">
            <Button href="/connect">Get in touch</Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-3">Latest from STRATRI</h2>
            <p className="font-sans text-lg text-stratri-dark/70">Deep thinking on AI governance, responsible technology and policy.</p>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stratri-dark mb-12 text-center uppercase">AI literacy & trainings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-stratri-cream/30 rounded-sm p-6 border border-stratri-divider/30">
                <img
                  src="/illustrations/literacy-growth.svg"
                  alt="Literacy Growth"
                  className="w-full"
                />
              </div>
              <div className="bg-stratri-cream/30 rounded-sm p-6 border border-stratri-divider/30">
                <img
                  src="/illustrations/literacy-network.svg"
                  alt="Literacy Network"
                  className="w-full"
                />
              </div>
            </div>

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
              <Button variant="outline" href="/services#literacy">
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
