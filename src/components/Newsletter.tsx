import { useState } from 'react';

export function Newsletter() {
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

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-navy mb-3">Stay close to the thinking</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Occasional deep dives on AI governance, policy and literacy – no spam.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
        <p className="mt-3 text-sm text-green-600">Thank you for subscribing!</p>
      )}
    </div>
  );
}
