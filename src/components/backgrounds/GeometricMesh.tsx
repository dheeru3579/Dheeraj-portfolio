import { useEffect, useState } from 'react';

interface GeometricMeshProps {
  variant?: 'hero' | 'section' | 'subtle';
  animated?: boolean;
}

const GeometricMesh = ({ variant = 'section', animated = true }: GeometricMeshProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animated) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animated]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'opacity-30';
      case 'section':
        return 'opacity-20';
      case 'subtle':
        return 'opacity-10';
      default:
        return 'opacity-20';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Mesh Pattern */}
      <div 
        className={`absolute inset-0 ${getVariantClasses()}`}
        style={{
          background: `
            radial-gradient(circle at ${20 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
            radial-gradient(circle at ${80 - mousePosition.x * 0.1}% ${20 + mousePosition.y * 0.05}%, hsl(var(--accent) / 0.5) 0%, transparent 50%),
            radial-gradient(circle at ${40 + mousePosition.x * 0.05}% ${80 - mousePosition.y * 0.1}%, hsl(var(--secondary) / 0.3) 0%, transparent 50%)
          `,
        }}
      />

      {/* Geometric Shapes */}
      <svg className={`absolute inset-0 w-full h-full ${getVariantClasses()}`}>
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="hsl(var(--primary))" opacity="0.3" />
          </pattern>
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#dots)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Floating geometric elements */}
        <g className={animated ? "animate-pulse-soft" : ""}>
          <polygon 
            points="100,50 150,150 50,150" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1" 
            opacity="0.3"
            transform={`translate(${mousePosition.x * 0.5}, ${mousePosition.y * 0.3})`}
          />
          <circle 
            cx="300" 
            cy="100" 
            r="30" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            opacity="0.2"
            transform={`translate(${-mousePosition.x * 0.3}, ${mousePosition.y * 0.2})`}
          />
          <rect 
            x="500" 
            y="200" 
            width="40" 
            height="40" 
            fill="none" 
            stroke="hsl(var(--secondary))" 
            strokeWidth="1" 
            opacity="0.25"
            transform={`rotate(45) translate(${mousePosition.x * 0.2}, ${-mousePosition.y * 0.4})`}
          />
        </g>
      </svg>

      {/* Animated gradient overlay */}
      {animated && (
        <div className="absolute inset-0 opacity-20 animate-gradient-shift bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      )}
    </div>
  );
};

export default GeometricMesh;