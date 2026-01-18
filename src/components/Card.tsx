import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white rounded-lg p-6
      shadow-[0_4px_0_0_rgba(2,31,91,0.1),0_6px_20px_-4px_rgba(2,31,91,0.15)]
      hover:shadow-[0_6px_0_0_rgba(128,177,210,0.15),0_10px_28px_-4px_rgba(128,177,210,0.25)]
      hover:-translate-y-1
      transition-all duration-300
      border border-gray-100
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
    <Card className="relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-soft/10 to-blue-periwinkle/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-navy mb-4">{title}</h3>
        <ul className="space-y-2 mb-4">
          {points.map((point, index) => (
            <li key={index} className="text-sm text-gray-700 leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
        <a href={link} className="inline-flex items-center text-sm font-medium text-navy hover:text-blue-soft transition-colors">
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
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
    <Card className="h-full flex flex-col">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-soft/10 text-blue-soft rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">{summary}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">{date}</span>
        <a
          href={`/insights/${slug}`}
          className="inline-flex items-center text-sm font-medium text-navy hover:text-blue-soft transition-colors"
        >
          Read <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </Card>
  );
}
