import { useState, useEffect, useRef } from 'react';
import { InsightCard } from '../components/Card';
import { Newsletter } from '../components/Newsletter';

const categories = [
  'All',
  'Reports',
  'Techletter',
  'Articles',
  'AI Wrapped',
];

const insights = [
  {
    title: 'Understanding AI Governance Frameworks',
    summary:
      'A deep dive into building effective AI governance structures that balance innovation with accountability and ethical considerations.',
    category: 'Articles',
    date: 'January 15, 2026',
    readingTime: '8 min read',
    slug: 'understanding-ai-governance-frameworks',
    illustrationType: 'network',
  },
  {
    title: 'The Evolution of AI Policy in 2026',
    summary:
      'Analyzing key regulatory developments across jurisdictions and what they mean for organizations deploying AI systems.',
    category: 'Articles',
    date: 'January 10, 2026',
    readingTime: '12 min read',
    slug: 'evolution-of-ai-policy-2026',
    illustrationType: 'circles',
  },
  {
    title: 'Building AI Literacy Across Your Organization',
    summary:
      'Why AI literacy is foundational to good governance, and practical approaches to building it across leadership and teams.',
    category: 'Techletter',
    date: 'January 5, 2026',
    readingTime: '6 min read',
    slug: 'building-ai-literacy',
    illustrationType: 'lines',
  },
  {
    title: 'AI Maturity Assessment: A Practical Framework',
    summary:
      'How to evaluate your organization\'s AI capabilities and readiness, with a step-by-step diagnostic approach.',
    category: 'Reports',
    date: 'December 20, 2025',
    readingTime: '15 min read',
    slug: 'ai-maturity-assessment-framework',
    illustrationType: 'grid',
  },
  {
    title: 'AI Wrapped 2025: The Year in Review',
    summary:
      'A comprehensive look back at the most significant developments, trends, and shifts in AI governance and policy throughout 2025.',
    category: 'AI Wrapped',
    date: 'December 18, 2025',
    readingTime: '10 min read',
    slug: 'ai-wrapped-2025',
    illustrationType: 'waves',
  },
  {
    title: 'Ethics by Design: Embedding Values in AI Systems',
    summary:
      'Moving beyond principles to practice – how to operationalize ethical considerations throughout the AI lifecycle.',
    category: 'Articles',
    date: 'December 15, 2025',
    readingTime: '9 min read',
    slug: 'ethics-by-design',
    illustrationType: 'dots',
  },
  {
    title: 'AI Governance in Financial Services: Lessons from Early Adopters',
    summary:
      'How banks and fintech companies are building governance structures that balance innovation with regulatory compliance and risk management.',
    category: 'Techletter',
    date: 'December 12, 2025',
    readingTime: '7 min read',
    slug: 'ai-governance-financial-services',
    illustrationType: 'network',
  },
  {
    title: 'Market Trends Report: AI Adoption in Financial Services',
    summary:
      'An analysis of how financial institutions are deploying AI, the use cases gaining traction, and regulatory considerations.',
    category: 'Reports',
    date: 'December 10, 2025',
    readingTime: '18 min read',
    slug: 'ai-adoption-financial-services',
    illustrationType: 'grid',
  },
  {
    title: 'The EU AI Act Enters Force: What Organizations Need to Know',
    summary:
      'Breaking down the implementation timeline, compliance requirements, and strategic implications of Europe\'s landmark AI regulation.',
    category: 'Techletter',
    date: 'December 5, 2025',
    readingTime: '8 min read',
    slug: 'eu-ai-act-organizations',
    illustrationType: 'circles',
  },
  {
    title: 'Annual Report: The State of AI Governance 2025',
    summary:
      'Our comprehensive annual review of AI governance trends, challenges, and emerging best practices across sectors.',
    category: 'Reports',
    date: 'December 1, 2025',
    readingTime: '22 min read',
    slug: 'state-of-ai-governance-2025',
    illustrationType: 'lines',
  },
  {
    title: 'The Role of the Board in AI Oversight',
    summary:
      'Why boards need AI literacy, what questions they should ask, and how to structure effective AI governance at the board level.',
    category: 'Articles',
    date: 'November 25, 2025',
    readingTime: '11 min read',
    slug: 'board-role-ai-oversight',
    illustrationType: 'dots',
  },
  {
    title: 'Building AI Literacy: A Practical Roadmap for Leadership Teams',
    summary:
      'A step-by-step approach to building AI understanding across your organization, from executives to frontline teams.',
    category: 'Techletter',
    date: 'November 18, 2025',
    readingTime: '6 min read',
    slug: 'building-ai-literacy-roadmap',
    illustrationType: 'waves',
  },
];

export function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredInsights =
    selectedCategory === 'All'
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredInsights]);

  return (
    <div className="min-h-screen bg-stratri-cream">
      <section className="bg-stratri-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-wide">Insights</h1>
          <p className="font-serif text-xl italic text-stratri-cream/80 leading-relaxed mb-4">
            Notes from the junction.
          </p>
          <p className="font-sans text-lg text-stratri-cream/70 leading-relaxed">
            STRATRI's work does not end with client projects. We map the wider technology and AI landscape and the rules that shape it, from regulatory drafts to boardroom narratives. Insights brings this together in one place: reports, explainers, "AI wrapped" briefs, published articles, and Techletter.
          </p>
        </div>
      </section>

      <section className="py-10 bg-stratri-cream sticky top-0 z-40 border-b border-stratri-divider/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 select-none ${
                  selectedCategory === category
                    ? 'bg-stratri-accent text-stratri-cream border border-[#135268] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:translate-y-0'
                    : 'border border-stratri-dark text-stratri-dark shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-stratri-accent hover:text-stratri-accent hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] active:translate-y-0'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleCards.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <InsightCard {...insight} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-stratri-divider/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
