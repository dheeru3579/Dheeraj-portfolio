interface DotGridProps {
  opacity?: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const DotGrid = ({ opacity = 0.15, size = 'md', animated = true }: DotGridProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { backgroundSize: '15px 15px', dotSize: 1 };
      case 'md':
        return { backgroundSize: '25px 25px', dotSize: 1.5 };
      case 'lg':
        return { backgroundSize: '35px 35px', dotSize: 2 };
      default:
        return { backgroundSize: '25px 25px', dotSize: 1.5 };
    }
  };

  const { backgroundSize, dotSize } = getSizeClasses();

  return (
    <div 
      className={`absolute inset-0 ${animated ? 'animate-pulse-soft' : ''}`}
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / ${opacity}) ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize,
        opacity: 0.6
      }}
    />
  );
};

export default DotGrid;