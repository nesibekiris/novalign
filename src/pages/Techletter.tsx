import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { GridPattern, GeometricShapes } from '../components/Visuals';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import { getTechletterIssues } from '../lib/cms';
import type { TechletterIssue } from '../lib/supabase';

export function Techletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [issues, setIssues] = useState<TechletterIssue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadIssues() {
      try {
        const data = await getTechletterIssues(6);
        setIssues(data);
      } catch (error) {
        console.error('Error loading Techletter issues:', error);
      } finally {
        setLoading(false);
      }
    }
    loadIssues();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/subscribe-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          email,
          source: 'techletter_page'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

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
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className={`text-center text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}

            <div className="text-center pt-6 border-t border-gray-100">
              <p className="text-gray-700 mb-4">Read on Substack</p>
              <a
                href="https://techletter.co"
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

      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">Latest from Techletter</h2>
            <p className="text-lg text-gray-700">Recent deep dives on governance, technology policy, and literacy</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading issues...</p>
            </div>
          ) : issues.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 mb-6">No issues published yet. Check back soon!</p>
              <Button
                href="https://techletter.co"
                onClick={() => window.open('https://techletter.co', '_blank')}
              >
                Visit Techletter
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {issues.map((issue) => (
                  <article
                    key={issue.id}
                    className="bg-light-bg rounded-lg border border-blue-soft/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {issue.cover_image && (
                      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-soft/10 to-navy/5">
                        <img
                          src={issue.cover_image}
                          alt={issue.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(issue.published_date)}
                        </span>
                        {issue.reading_time && (
                          <span className="inline-flex items-center gap-1">
                            <Clock size={14} />
                            {issue.reading_time}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-navy mb-3 leading-tight font-serif">
                        {issue.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                        {issue.excerpt}
                      </p>

                      <a
                        href={issue.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors w-full justify-center"
                      >
                        Read on Techletter
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  href="https://techletter.co"
                  onClick={() => window.open('https://techletter.co', '_blank')}
                >
                  Browse all issues on Substack
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
