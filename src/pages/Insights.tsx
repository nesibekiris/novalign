import { useState } from 'react';
import { InsightCard } from '../components/Card';
import { Newsletter } from '../components/Newsletter';

const categories = [
  'All',
  'AI Strategy & Maturity',
  'AI Governance',
  'AI Ethics',
  'AI Literacy',
  'Market & Policy Research',
  'Policy & Government Affairs',
  'Reports & Publications',
];

const insights = [
  {
    title: 'Understanding AI Governance Frameworks',
    summary:
      'A deep dive into building effective AI governance structures that balance innovation with accountability and ethical considerations.',
    category: 'AI Governance',
    date: 'January 15, 2026',
    slug: 'understanding-ai-governance-frameworks',
  },
  {
    title: 'The Evolution of AI Policy in 2026',
    summary:
      'Analyzing key regulatory developments across jurisdictions and what they mean for organizations deploying AI systems.',
    category: 'Policy & Government Affairs',
    date: 'January 10, 2026',
    slug: 'evolution-of-ai-policy-2026',
  },
  {
    title: 'Building AI Literacy Across Your Organization',
    summary:
      'Why AI literacy is foundational to good governance, and practical approaches to building it across leadership and teams.',
    category: 'AI Literacy',
    date: 'January 5, 2026',
    slug: 'building-ai-literacy',
  },
  {
    title: 'AI Maturity Assessment: A Practical Framework',
    summary:
      'How to evaluate your organization\'s AI capabilities and readiness, with a step-by-step diagnostic approach.',
    category: 'AI Strategy & Maturity',
    date: 'December 20, 2025',
    slug: 'ai-maturity-assessment-framework',
  },
  {
    title: 'Ethics by Design: Embedding Values in AI Systems',
    summary:
      'Moving beyond principles to practice – how to operationalize ethical considerations throughout the AI lifecycle.',
    category: 'AI Ethics',
    date: 'December 15, 2025',
    slug: 'ethics-by-design',
  },
  {
    title: 'Market Trends Report: AI Adoption in Financial Services',
    summary:
      'An analysis of how financial institutions are deploying AI, the use cases gaining traction, and regulatory considerations.',
    category: 'Market & Policy Research',
    date: 'December 10, 2025',
    slug: 'ai-adoption-financial-services',
  },
  {
    title: 'Navigating the EU AI Act: A Practical Guide',
    summary:
      'Understanding the requirements, compliance timelines, and strategic implications of Europe\'s landmark AI regulation.',
    category: 'Policy & Government Affairs',
    date: 'December 5, 2025',
    slug: 'navigating-eu-ai-act',
  },
  {
    title: 'Annual Report: The State of AI Governance 2025',
    summary:
      'Our comprehensive annual review of AI governance trends, challenges, and emerging best practices across sectors.',
    category: 'Reports & Publications',
    date: 'December 1, 2025',
    slug: 'state-of-ai-governance-2025',
  },
  {
    title: 'The Role of the Board in AI Oversight',
    summary:
      'Why boards need AI literacy, what questions they should ask, and how to structure effective AI governance at the board level.',
    category: 'AI Governance',
    date: 'November 25, 2025',
    slug: 'board-role-ai-oversight',
  },
];

export function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInsights =
    selectedCategory === 'All'
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Insights & Research</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Deep thinking on AI governance, strategy, ethics, literacy and policy. Research-led perspectives on the
            challenges and opportunities of aligning AI with organizational and public values.
          </p>
        </div>
      </section>

      <section className="py-12 bg-light-bg sticky top-16 z-40 border-b border-light-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy hover:bg-light-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-700">
              Showing <span className="font-semibold">{filteredInsights.length}</span>{' '}
              {selectedCategory === 'All' ? 'insights' : `insights in "${selectedCategory}"`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
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
