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
    <div className="bg-white rounded-sm border border-stratri-divider/50 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-3">Stay close to the thinking</h3>
      <p className="font-sans text-stratri-dark/70 mb-6 leading-relaxed">
        Occasional deep dives on AI governance, policy and literacy – no spam.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 border border-stratri-divider rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-stratri-accent focus:border-stratri-accent transition-all"
        />
        <button
          type="submit"
          className="px-8 py-3.5 bg-stratri-accent text-stratri-cream border border-[#135268] rounded-md font-sans font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#1a5a6f] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 select-none cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-sm font-sans text-green-600">Thank you for subscribing!</p>
      )}
    </div>
  );
}
