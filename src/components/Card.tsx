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
}

export function InsightCard({ title, summary, category, date, slug }: InsightCardProps) {
  return (
    <Card className="h-full flex flex-col group cursor-pointer hover:shadow-sm">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-sans font-medium bg-stratri-light/20 text-stratri-accent rounded-full uppercase tracking-wide">
          {category}
        </span>
      </div>
      <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3 line-clamp-2 group-hover:text-stratri-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-stratri-dark/70 font-sans leading-relaxed mb-6 flex-grow line-clamp-3">
        {summary}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-stratri-divider">
        <span className="text-xs text-stratri-dark/50 font-sans">{date}</span>
        <a
          href={`/insights/${slug}`}
          className="inline-flex items-center text-sm font-sans font-medium text-stratri-accent hover:text-stratri-dark transition-colors"
        >
          Read <ArrowRight size={14} className="ml-2" />
        </a>
      </div>
    </Card>
  );
}
