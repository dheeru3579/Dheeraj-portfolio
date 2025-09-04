interface WavePatternProps {
  variant?: 'flowing' | 'static' | 'subtle';
  direction?: 'horizontal' | 'vertical';
}

const WavePattern = ({ variant = 'flowing', direction = 'horizontal' }: WavePatternProps) => {
  const getWaveClasses = () => {
    const baseClasses = "absolute inset-0";
    
    if (variant === 'flowing') {
      return `${baseClasses} opacity-20 animate-gradient-shift`;
    } else if (variant === 'subtle') {
      return `${baseClasses} opacity-10`;
    }
    
    return `${baseClasses} opacity-15`;
  };

  return (
    <div className={getWaveClasses()}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {direction === 'horizontal' ? (
          <>
            <path
              d="M0,300 Q250,200 500,300 T1000,300 L1000,400 Q750,500 500,400 T0,400 Z"
              fill="url(#waveGradient)"
              className={variant === 'flowing' ? 'animate-pulse-soft' : ''}
            />
            <path
              d="M0,600 Q250,500 500,600 T1000,600 L1000,700 Q750,800 500,700 T0,700 Z"
              fill="url(#waveGradient)"
              className={variant === 'flowing' ? 'animate-pulse-soft' : ''}
              style={{ animationDelay: '1s' }}
            />
          </>
        ) : (
          <>
            <path
              d="M300,0 Q200,250 300,500 T300,1000 L400,1000 Q500,750 400,500 T400,0 Z"
              fill="url(#waveGradient)"
              className={variant === 'flowing' ? 'animate-pulse-soft' : ''}
            />
            <path
              d="M600,0 Q500,250 600,500 T600,1000 L700,1000 Q800,750 700,500 T700,0 Z"
              fill="url(#waveGradient)"
              className={variant === 'flowing' ? 'animate-pulse-soft' : ''}
              style={{ animationDelay: '1.5s' }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default WavePattern;