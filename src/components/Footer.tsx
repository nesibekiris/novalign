import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stratri-divider py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4 text-stratri-dark uppercase tracking-wider">STRATRI</h3>
            <p className="text-sm text-stratri-dark/70 leading-relaxed font-sans">
              Technology Policy & AI governance Consultancy
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-stratri-dark uppercase tracking-wide">Navigate</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Services
              </Link>
              <Link to="/railway" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Railway
              </Link>
              <Link to="/techletter" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Techletter
              </Link>
              <Link to="/insights" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Insights
              </Link>
              <Link to="/about" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                About
              </Link>
              <Link to="/connect" className="block text-sm text-stratri-dark/70 hover:text-stratri-accent transition-colors">
                Connect
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-stratri-dark uppercase tracking-wide">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nesibekiris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stratri-dark/70 hover:text-stratri-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nesibe@stratri.com"
                className="text-stratri-dark/70 hover:text-stratri-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stratri-divider pt-8 text-center">
          <p className="text-xs text-stratri-dark/50 font-sans">
            © {currentYear} Stratri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
