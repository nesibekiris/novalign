import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stratri-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-serif text-2xl font-medium tracking-wider text-stratri-dark uppercase">
            STRATRI
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-sans font-normal transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-stratri-accent font-medium'
                    : 'text-stratri-dark hover:text-stratri-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-stratri-cream transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-stratri-dark" /> : <Menu size={24} className="text-stratri-dark" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stratri-divider">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-sans transition-colors ${
                  isActive(link.path)
                    ? 'text-stratri-accent font-medium'
                    : 'text-stratri-dark hover:text-stratri-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
