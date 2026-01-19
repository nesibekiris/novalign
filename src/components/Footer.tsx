import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Stratri</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI Governance & Responsible Technology Consultancy
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Navigate</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Services
              </Link>
              <Link to="/railway" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Railway
              </Link>
              <Link to="/techletter" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Techletter
              </Link>
              <Link to="/insights" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Insights
              </Link>
              <Link to="/about" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                About
              </Link>
              <Link to="/connect" className="block text-sm text-gray-300 hover:text-blue-soft transition-colors">
                Connect
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-soft transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@stratri.com"
                className="text-gray-300 hover:text-blue-soft transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Stratri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
