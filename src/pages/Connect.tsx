import { useState } from 'react';
import { Mail, Linkedin, BookOpen } from 'lucide-react';

export function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({
      name: '',
      organization: '',
      email: '',
      topic: '',
      message: '',
    });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">Connect</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Connect with Stratri for conversations on AI governance, responsible technology and policy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-navy mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-navy mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-navy mb-2">
                      What would you like to talk about?
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="strategy">AI Strategy & Maturity</option>
                      <option value="governance">AI Governance, Ethics & Literacy</option>
                      <option value="research">Market & Policy Research</option>
                      <option value="policy">Policy & Government Affairs</option>
                      <option value="training">Trainings / AI Literacy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors"
                  >
                    Send message
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
                      <p className="text-sm text-green-800">
                        Thank you for reaching out! We usually respond within 2-3 business days.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy mb-4">Direct channels</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={20} className="text-blue-soft" />
                      <a href="mailto:hello@stratri.com" className="hover:text-blue-soft transition-colors">
                        Email
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Linkedin size={20} className="text-blue-soft" />
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-soft transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <BookOpen size={20} className="text-blue-soft" />
                      <a href="/techletter" className="hover:text-blue-soft transition-colors">
                        Substack / Techletter
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">Response time</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We usually respond within 2-3 business days. For urgent inquiries, please mention that in your
                  message.
                </p>
              </div>

              <div className="bg-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">Who we work with</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We work with organizations of all sizes – from startups to large enterprises, and from private sector
                  to public institutions and civil society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
