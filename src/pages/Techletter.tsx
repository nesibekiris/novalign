import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { GridPattern, GeometricShapes } from '../components/Visuals';
import { ExternalLink } from 'lucide-react';

export function Techletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const recentIssues = [
    {
      title: 'The EU AI Act enters force: What organizations need to know',
      summary:
        'Breaking down the implementation timeline, compliance requirements, and strategic implications of Europe\'s landmark AI regulation.',
      date: 'January 2026',
    },
    {
      title: 'AI governance in financial services: Lessons from early adopters',
      summary:
        'How banks and fintech companies are building governance structures that balance innovation with regulatory compliance and risk management.',
      date: 'December 2025',
    },
    {
      title: 'Building AI literacy: A practical roadmap for leadership teams',
      summary:
        'Why AI literacy is the foundation of good governance, and a step-by-step approach to building understanding across your organization.',
      date: 'November 2025',
    },
  ];

  const topics = [
    {
      title: 'AI Governance & Ethics',
      description: 'Frameworks, principles, and practical approaches to governing AI systems responsibly.',
    },
    {
      title: 'AI and Tech Policy',
      description: 'Analysis of regulatory developments, policy debates, and their implications for organizations.',
    },
    {
      title: 'Market & Societal Trends',
      description: 'How AI is shaping industries, use cases gaining traction, and societal impacts worth watching.',
    },
    {
      title: 'Explainers & Literacy',
      description: 'Clear, accessible explanations of AI concepts, technologies, and governance considerations.',
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white py-20 overflow-hidden">
        <GridPattern />
        <GeometricShapes />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Techletter</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stratri's newsletter on AI governance, responsible technology, policy and literacy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-semibold text-navy mb-6">About Techletter</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Techletter is Stratri's newsletter on AI governance, responsible technology, policy and literacy. It brings depth and clarity to the complex landscape where technology, society and policy converge – sharing analysis, research insights, and practical frameworks for leaders and teams.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Published regularly, Techletter covers governance frameworks, policy developments, market trends, and AI literacy – always with a focus on depth over hype, and practical application over abstract theory.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {topics.map((topic, index) => (
              <Card key={index}>
                <h3 className="text-xl font-semibold text-navy mb-3">{topic.title}</h3>
                <p className="text-gray-700 leading-relaxed">{topic.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-6 text-center">Subscribe to Techletter</h2>
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              Receive deep dives on AI governance, policy and literacy directly in your inbox. No spam, just thoughtful
              analysis.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors"
              >
                Subscribe
              </button>
            </form>
            {status === 'success' && (
              <p className="text-center text-sm text-green-600">Thank you for subscribing to Techletter!</p>
            )}

            <div className="text-center pt-6 border-t border-gray-100">
              <p className="text-gray-700 mb-4">Read on Substack</p>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-light text-navy font-medium rounded-sm hover:bg-light-dark transition-colors"
              >
                Read on Substack
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">Recent issues</h2>
            <p className="text-lg text-gray-700">A selection of recent Techletter editions</p>
          </div>

          <div className="space-y-6">
            {recentIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy mb-2">{issue.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{issue.summary}</p>
                    <span className="inline-block text-sm text-gray-500">{issue.date}</span>
                  </div>
                  <a
                    href="https://substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-blue-soft transition-colors"
                  >
                    Read
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="https://substack.com"
              onClick={() => window.open('https://substack.com', '_blank')}
            >
              Browse all issues
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
