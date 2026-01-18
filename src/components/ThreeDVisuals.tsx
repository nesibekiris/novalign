export function HeroIllustration() {
  return (
    <svg
      className="w-full h-auto max-w-2xl mx-auto"
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rail-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#021f5b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#80b1d2" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="rail-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87a6dd" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#021f5b" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#80b1d2" />
          <stop offset="100%" stopColor="#87a6dd" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow)">
        <path
          d="M 100 250 Q 200 200 300 250 T 500 250 T 700 250"
          stroke="url(#rail-grad-1)"
          strokeWidth="8"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 100 270 Q 200 220 300 270 T 500 270 T 700 270"
          stroke="url(#rail-grad-1)"
          strokeWidth="8"
          fill="none"
          opacity="0.7"
        />
      </g>

      <g filter="url(#shadow)">
        <path
          d="M 150 150 L 250 200 L 250 280 L 150 230 Z"
          fill="url(#rail-grad-2)"
          opacity="0.8"
        />
        <path
          d="M 250 200 L 350 170 L 350 250 L 250 280 Z"
          fill="url(#rail-grad-1)"
          opacity="0.9"
        />
      </g>

      <g filter="url(#shadow)">
        <path
          d="M 450 180 L 550 160 L 550 240 L 450 260 Z"
          fill="url(#rail-grad-2)"
          opacity="0.8"
        />
        <path
          d="M 550 160 L 650 190 L 650 270 L 550 240 Z"
          fill="url(#rail-grad-1)"
          opacity="0.9"
        />
      </g>

      <circle cx="200" cy="250" r="12" fill="url(#node-grad)" opacity="0.9" filter="url(#shadow)" />
      <circle cx="300" cy="250" r="12" fill="url(#node-grad)" opacity="0.9" filter="url(#shadow)" />
      <circle cx="400" cy="250" r="12" fill="url(#node-grad)" opacity="0.9" filter="url(#shadow)" />
      <circle cx="500" cy="250" r="12" fill="url(#node-grad)" opacity="0.9" filter="url(#shadow)" />
      <circle cx="600" cy="250" r="12" fill="url(#node-grad)" opacity="0.9" filter="url(#shadow)" />

      <g opacity="0.4">
        <line x1="200" y1="250" x2="300" y2="215" stroke="#80b1d2" strokeWidth="2" />
        <line x1="300" y1="250" x2="500" y2="200" stroke="#87a6dd" strokeWidth="2" />
        <line x1="400" y1="250" x2="600" y2="230" stroke="#80b1d2" strokeWidth="2" />
        <line x1="500" y1="250" x2="600" y2="250" stroke="#87a6dd" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function RailwayFrameworkVisual() {
  return (
    <svg
      className="w-full h-auto max-w-3xl mx-auto"
      viewBox="0 0 900 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rail-base" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#021f5b" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#80b1d2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#021f5b" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="pillar-r" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87a6dd" />
          <stop offset="100%" stopColor="#021f5b" />
        </linearGradient>
        <linearGradient id="pillar-a" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#80b1d2" />
          <stop offset="100%" stopColor="#021f5b" />
        </linearGradient>
        <linearGradient id="pillar-i" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87a6dd" />
          <stop offset="100%" stopColor="#021f5b" />
        </linearGradient>
        <linearGradient id="pillar-l" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#80b1d2" />
          <stop offset="100%" stopColor="#021f5b" />
        </linearGradient>
        <filter id="pillar-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="6" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="50" y="280" width="800" height="20" fill="url(#rail-base)" rx="4" opacity="0.8" />
      <rect x="50" y="310" width="800" height="20" fill="url(#rail-base)" rx="4" opacity="0.8" />

      <g filter="url(#pillar-shadow)">
        <rect x="120" y="100" width="80" height="180" fill="url(#pillar-r)" rx="4" />
        <rect x="120" y="100" width="80" height="30" fill="#021f5b" opacity="0.3" rx="4" />
        <text x="160" y="200" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
          R
        </text>
      </g>

      <g filter="url(#pillar-shadow)">
        <rect x="290" y="80" width="80" height="200" fill="url(#pillar-a)" rx="4" />
        <rect x="290" y="80" width="80" height="30" fill="#021f5b" opacity="0.3" rx="4" />
        <text x="330" y="190" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
          A
        </text>
      </g>

      <g filter="url(#pillar-shadow)">
        <rect x="460" y="90" width="80" height="190" fill="url(#pillar-i)" rx="4" />
        <rect x="460" y="90" width="80" height="30" fill="#021f5b" opacity="0.3" rx="4" />
        <text x="500" y="195" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
          I
        </text>
      </g>

      <g filter="url(#pillar-shadow)">
        <rect x="630" y="110" width="80" height="170" fill="url(#pillar-l)" rx="4" />
        <rect x="630" y="110" width="80" height="30" fill="#021f5b" opacity="0.3" rx="4" />
        <text x="670" y="205" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
          L
        </text>
      </g>

      <g opacity="0.3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={i} x={50 + i * 100} y="340" width="70" height="8" fill="#021f5b" rx="2" />
        ))}
      </g>
    </svg>
  );
}

export function ServiceCardIcon({ type }: { type: 'strategy' | 'governance' | 'research' | 'policy' }) {
  const icons = {
    strategy: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="strategy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#021f5b" />
            <stop offset="100%" stopColor="#80b1d2" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#strategy-grad)" opacity="0.2" />
        <path
          d="M 30 70 L 50 30 L 70 70 Z"
          stroke="url(#strategy-grad)"
          strokeWidth="3"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="30" r="5" fill="#021f5b" />
        <circle cx="30" cy="70" r="5" fill="#80b1d2" />
        <circle cx="70" cy="70" r="5" fill="#87a6dd" />
      </svg>
    ),
    governance: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="gov-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87a6dd" />
            <stop offset="100%" stopColor="#021f5b" />
          </linearGradient>
        </defs>
        <rect x="25" y="25" width="50" height="50" stroke="url(#gov-grad)" strokeWidth="3" fill="none" rx="4" />
        <rect x="40" y="40" width="20" height="20" fill="url(#gov-grad)" opacity="0.6" rx="2" />
        <circle cx="35" cy="35" r="3" fill="#80b1d2" />
        <circle cx="65" cy="35" r="3" fill="#87a6dd" />
        <circle cx="35" cy="65" r="3" fill="#87a6dd" />
        <circle cx="65" cy="65" r="3" fill="#80b1d2" />
      </svg>
    ),
    research: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="research-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#80b1d2" />
            <stop offset="100%" stopColor="#021f5b" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="25" stroke="url(#research-grad)" strokeWidth="3" fill="none" />
        <line x1="68" y1="68" x2="82" y2="82" stroke="url(#research-grad)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="50" r="12" fill="url(#research-grad)" opacity="0.3" />
      </svg>
    ),
    policy: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="policy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#021f5b" />
            <stop offset="100%" stopColor="#87a6dd" />
          </linearGradient>
        </defs>
        <rect x="30" y="25" width="40" height="50" stroke="url(#policy-grad)" strokeWidth="3" fill="none" rx="2" />
        <line x1="38" y1="38" x2="62" y2="38" stroke="url(#policy-grad)" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="48" x2="62" y2="48" stroke="url(#policy-grad)" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="58" x2="55" y2="58" stroke="url(#policy-grad)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[type];
}

export function AlignmentNodes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="node-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#80b1d2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#87a6dd" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g>
        <line x1="100" y1="150" x2="300" y2="200" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="300" y1="200" x2="500" y2="150" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="100" y1="300" x2="300" y2="400" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="300" y1="400" x2="500" y2="300" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="100" y1="150" x2="100" y2="300" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="300" y1="200" x2="300" y2="400" stroke="url(#node-line-grad)" strokeWidth="2" />
        <line x1="500" y1="150" x2="500" y2="300" stroke="url(#node-line-grad)" strokeWidth="2" />
        <circle cx="100" cy="150" r="8" fill="#80b1d2" />
        <circle cx="100" cy="300" r="8" fill="#87a6dd" />
        <circle cx="300" cy="200" r="8" fill="#80b1d2" />
        <circle cx="300" cy="400" r="8" fill="#87a6dd" />
        <circle cx="500" cy="150" r="8" fill="#80b1d2" />
        <circle cx="500" cy="300" r="8" fill="#87a6dd" />
      </g>
    </svg>
  );
}
