interface IconProps {
  className?: string;
}

export function TechnologyIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="20" r="6" fill="#9FB7C8" />
      <circle cx="16" cy="44" r="6" fill="#184A5A" />
      <circle cx="48" cy="44" r="6" fill="#184A5A" />
      <path
        d="M32 26 L32 38 M32 38 L16 44 M32 38 L48 44"
        stroke="#1E2A45"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="28" y="36" width="8" height="8" rx="1" fill="#184A5A" />
    </svg>
  );
}

export function PolicyIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="18" y="14" width="28" height="36" rx="1" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <path d="M24 22 L40 22 M24 28 L40 28 M24 34 L36 34 M24 40 L38 40" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="42" cy="46" r="2" fill="#184A5A" />
    </svg>
  );
}

export function SocietyIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="22" r="7" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <circle cx="18" cy="26" r="5" fill="#184A5A" opacity="0.6" />
      <circle cx="46" cy="26" r="5" fill="#184A5A" opacity="0.6" />
      <path
        d="M22 42 Q32 36 42 42 L42 50 L22 50 Z"
        fill="#9FB7C8"
        stroke="#1E2A45"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function StrategyIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 48 L32 16 L52 48"
        stroke="#1E2A45"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="16" r="3" fill="#184A5A" />
      <rect x="20" y="42" width="8" height="8" rx="1" fill="#9FB7C8" />
      <rect x="36" y="42" width="8" height="8" rx="1" fill="#9FB7C8" />
      <path d="M22 32 L32 24 L42 32" stroke="#184A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function GovernanceIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" y="24" width="32" height="24" rx="1" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <path d="M24 32 L32 38 L40 28" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="22" y="16" width="20" height="6" rx="1" fill="#184A5A" />
      <circle cx="20" cy="42" r="2" fill="#1E2A45" opacity="0.3" />
      <circle cx="32" cy="42" r="2" fill="#1E2A45" opacity="0.3" />
      <circle cx="44" cy="42" r="2" fill="#1E2A45" opacity="0.3" />
    </svg>
  );
}

export function ResearchIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="14" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <path d="M38 38 L48 48" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 28 L28 22 L36 28 L28 34 Z" fill="#184A5A" opacity="0.7" />
    </svg>
  );
}

export function PolicyAffairsIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" y="20" width="32" height="28" rx="1" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <rect x="24" y="12" width="16" height="10" rx="1" fill="#184A5A" />
      <path d="M26 30 L32 36 M32 30 L38 36" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="40" r="3" fill="#184A5A" />
    </svg>
  );
}

export function RailwayTrackIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 12 L16 52" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 12 L48 52" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18 L48 18 M16 28 L48 28 M16 38 L48 38 M16 48 L48 48" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="#9FB7C8" />
    </svg>
  );
}

export function JunctionIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 12 L32 32 M12 32 L32 32 M32 32 L52 32 M32 32 L32 52" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="6" fill="#9FB7C8" stroke="#1E2A45" strokeWidth="1.5" />
      <circle cx="32" cy="12" r="3" fill="#184A5A" />
      <circle cx="12" cy="32" r="3" fill="#184A5A" />
      <circle cx="52" cy="32" r="3" fill="#184A5A" />
      <circle cx="32" cy="52" r="3" fill="#184A5A" />
    </svg>
  );
}
