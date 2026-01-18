export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function NetworkPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="90" cy="30" r="2" fill="currentColor" />
            <circle cx="50" cy="80" r="2" fill="currentColor" />
            <circle cx="70" cy="50" r="2" fill="currentColor" />
            <line x1="10" y1="10" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" />
            <line x1="90" y1="30" x2="70" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="70" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
    </div>
  );
}

export function CirclePattern() {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-5">
      <div className="absolute -top-1/4 -right-1/4 w-full h-full">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

export function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg
        className="w-full h-24 text-light-bg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C150,100 350,0 600,64 C850,128 1050,0 1200,64 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-soft/20 rounded-lg rotate-12 opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-periwinkle/20 rounded-full opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-soft/10 to-transparent rounded-lg rotate-45" />
    </div>
  );
}

export function DiagonalLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonals" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
    </div>
  );
}

export function DotPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function GradientBlob({ position = 'top-right', color = 'blue-soft' }: { position?: string; color?: string }) {
  const positionClasses = {
    'top-right': '-top-32 -right-32',
    'top-left': '-top-32 -left-32',
    'bottom-right': '-bottom-32 -right-32',
    'bottom-left': '-bottom-32 -left-32',
  };

  return (
    <div className={`absolute ${positionClasses[position as keyof typeof positionClasses]} w-96 h-96 pointer-events-none`}>
      <div className={`w-full h-full bg-gradient-to-br from-${color}/20 to-transparent rounded-full blur-3xl`} />
    </div>
  );
}
