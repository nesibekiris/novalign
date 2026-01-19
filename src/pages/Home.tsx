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
    <div className="min-h-screen bg-light">
      <section className="relative bg-gradient-to-br from-light via-light to-light-bg py-20 lg:py-28 overflow-hidden">
        <GridPattern />
        <GeometricShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-navy mb-4 tracking-wide uppercase">
              AI Governance & Responsible Technology Consultancy
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy mb-6 leading-tight">
              Technology. Society. Policy. Strategized.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
              Stratri works at the intersection of technology, society and policy – turning AI governance and responsible technology into a strategic advantage. We believe that governance and ethics are not constraints, but the foundation for sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/connect">Let's talk</Button>
              <Button variant="secondary" href="/insights">
                Explore insights
              </Button>
            </div>
          </div>
          <div className="relative max-w-3xl mx-auto mt-16">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-soft">
              <div className="flex items-start gap-4">
                <Linkedin className="text-blue-soft flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-sm text-gray-800 mb-3">
                    <span className="font-medium">You discovered Stratri on LinkedIn.</span> Here's how we help organizations navigate the intersection of technology, society and policy.
                  </p>
                  <button
                    onClick={() => scrollToSection('what-we-do')}
                    className="inline-flex items-center text-sm font-medium text-navy hover:text-blue-soft transition-colors"
                  >
                    See what we do <ArrowDown size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">What we do</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Four core pillars where technology, society and policy converge into strategic advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-light overflow-hidden">
        <DotPattern />
        <AlignmentNodes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">How we work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4
                shadow-[0_5px_0_0_#010d2a,0_8px_20px_-4px_rgba(2,31,91,0.5)]
                group-hover:shadow-[0_7px_0_0_#010d2a,0_10px_24px_-4px_rgba(128,177,210,0.6)]
                group-hover:-translate-y-1
                transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-blue-soft/20 blur-xl" />
                <span className="relative">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Diagnose</h3>
              <p className="text-gray-700 leading-relaxed">
                Understand context, risks, opportunities and AI maturity.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4
                shadow-[0_5px_0_0_#010d2a,0_8px_20px_-4px_rgba(2,31,91,0.5)]
                group-hover:shadow-[0_7px_0_0_#010d2a,0_10px_24px_-4px_rgba(128,177,210,0.6)]
                group-hover:-translate-y-1
                transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-blue-periwinkle/20 blur-xl" />
                <span className="relative">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Co-create strategy, governance, ethics and policy frameworks.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4
                shadow-[0_5px_0_0_#010d2a,0_8px_20px_-4px_rgba(2,31,91,0.5)]
                group-hover:shadow-[0_7px_0_0_#010d2a,0_10px_24px_-4px_rgba(128,177,210,0.6)]
                group-hover:-translate-y-1
                transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-blue-soft/20 blur-xl" />
                <span className="relative">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Embed</h3>
              <p className="text-gray-700 leading-relaxed">
                Implement through trainings, AI literacy, documentation and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-2">Latest from Stratri</h2>
              <p className="text-gray-700">Deep thinking on AI governance, responsible technology and policy.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {insights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}

            <div className="bg-gradient-to-br from-navy to-navy-light rounded-lg p-6 text-white flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <BookOpen size={32} className="text-blue-soft" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Techletter</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Stratri's newsletter on AI governance, responsible technology, policy and literacy. Deep dives delivered to your inbox.
                </p>
              </div>
              <div className="pt-4">
                <Button href="/techletter" className="bg-white text-navy hover:bg-light">
                  Visit Techletter
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button href="/insights">View all insights</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-8 text-center">AI literacy & trainings</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <div className="space-y-6">
                {trainings.map((training, index) => (
                  <div key={index} className="pb-6 last:pb-0 border-b last:border-b-0 border-gray-200">
                    <h3 className="text-lg font-semibold text-navy mb-2">{training.title}</h3>
                    <p className="text-gray-700">{training.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button variant="secondary" href="/services#governance">
                See all trainings
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
