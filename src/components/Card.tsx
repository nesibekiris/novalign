import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white rounded-sm p-8 border border-stratri-divider
      hover:border-stratri-light transition-all duration-200
      ${className}
    `}>
      {children}
    </div>
  );
}

interface PillarCardProps {
  title: string;
  points: string[];
  link: string;
}

export function PillarCard({ title, points, link }: PillarCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <h3 className="font-serif text-2xl font-medium text-stratri-dark mb-6">{title}</h3>
      <ul className="space-y-3 mb-6 flex-grow">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-stratri-dark/70 leading-relaxed font-sans">
            {point}
          </li>
        ))}
      </ul>
      <a href={link} className="inline-flex items-center text-sm font-sans font-medium text-stratri-accent hover:text-stratri-dark transition-colors">
        Learn more <ArrowRight size={16} className="ml-2" />
      </a>
    </Card>
  );
}

interface InsightCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  readingTime?: string;
  illustrationType?: string;
}

function AbstractIllustration({ type }: { type: string }) {
  const illustrations = {
    network: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="30" cy="30" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="100" cy="25" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="170" cy="35" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="60" cy="80" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="140" cy="85" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <line x1="30" y1="30" x2="100" y2="25" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="100" y1="25" x2="170" y2="35" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="30" y1="30" x2="60" y2="80" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="100" y1="25" x2="60" y2="80" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="170" y1="35" x2="140" y2="85" stroke="#9FB7C8" strokeWidth="1" />
      </svg>
    ),
    circles: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="50" cy="60" r="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="120" cy="40" r="25" fill="#9FB7C8" fillOpacity="0.15" stroke="#1E2A45" strokeWidth="1.5" />
        <circle cx="150" cy="80" r="20" fill="none" stroke="#184A5A" strokeWidth="1.5" />
      </svg>
    ),
    lines: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M20,100 Q60,30 100,60 T180,40" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <path d="M20,80 Q70,20 120,50 T180,30" fill="none" stroke="#9FB7C8" strokeWidth="1" />
        <circle cx="100" cy="60" r="4" fill="#184A5A" />
        <circle cx="180" cy="40" r="4" fill="#184A5A" />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="20" y="20" width="50" height="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <rect x="80" y="20" width="50" height="35" fill="#9FB7C8" fillOpacity="0.15" stroke="#1E2A45" strokeWidth="1.5" />
        <rect x="140" y="20" width="40" height="35" fill="none" stroke="#184A5A" strokeWidth="1.5" />
        <rect x="20" y="65" width="50" height="35" fill="#184A5A" fillOpacity="0.1" stroke="#1E2A45" strokeWidth="1.5" />
        <rect x="80" y="65" width="50" height="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={30 + i * 22} cy={30} r="3" fill="#9FB7C8" />
        ))}
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx={40 + i * 22} cy={60} r="3" fill="#1E2A45" />
        ))}
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={30 + i * 22} cy={90} r="3" fill="#184A5A" />
        ))}
      </svg>
    ),
    waves: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M0,60 Q25,40 50,60 T100,60 T150,60 T200,60" fill="none" stroke="#1E2A45" strokeWidth="1.5" />
        <path d="M0,75 Q25,55 50,75 T100,75 T150,75 T200,75" fill="none" stroke="#9FB7C8" strokeWidth="1" />
        <path d="M0,45 Q25,25 50,45 T100,45 T150,45 T200,45" fill="none" stroke="#184A5A" strokeWidth="1" />
      </svg>
    ),
  };

  return illustrations[type as keyof typeof illustrations] || illustrations.network;
}

export function InsightCard({ title, summary, category, date, slug, readingTime, illustrationType = 'network' }: InsightCardProps) {
  return (
    <a href={`/insights/${slug}`} className="block h-full group">
      <div className="h-full flex flex-col bg-stratri-cream border border-stratri-divider/50 rounded-sm overflow-hidden transition-all duration-300 hover:border-stratri-accent hover:shadow-lg hover:-translate-y-1">
        <div className="h-32 bg-white border-b border-stratri-divider/30 flex items-center justify-center p-6">
          <AbstractIllustration type={illustrationType} />
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3 line-clamp-2 group-hover:text-stratri-accent transition-colors">
            {title}
          </h3>

          <p className="font-sans text-sm text-stratri-dark/70 leading-relaxed mb-4 flex-grow line-clamp-3">
            {summary}
          </p>

          <div className="flex items-center gap-2 text-xs font-sans text-stratri-dark/50 pt-4 border-t border-stratri-divider/30">
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime || '5 min read'}</span>
            <span>•</span>
            <span className="font-medium text-stratri-accent">{category}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
