import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
  markClassName?: string;
}

/**
 * Official ITINA AI Brand Logo
 * Master vector geometry generated directly from official brand asset.
 * Uses exact 1000x1000 coordinate system with 1.28205 slope ribbon & parallel channels.
 */
export const LogoMark: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = 'text-[#F5F5F5]'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-label="ITINA AI Official Logo Mark"
    >
      {/* 1. Left Pillar: [35, 215] with 45° bottom cut */}
      <polygon points="35,0 215,0 215,629.4 35,860.1" />

      {/* 2. Main Central Diagonal Ribbon: Parallelogram from baseline to cap-height */}
      <polygon points="0,1000 220,1000 1000,0 780,0" />

      {/* 3. Middle Pillar: [515, 695] on baseline with 45° top cut */}
      <polygon points="515,1000 515,716.8 695,486.0 695,1000" />

      {/* 4. Right Pillar: [775, 955] on baseline with 45° top cut */}
      <polygon points="775,1000 775,383.5 955,152.7 955,1000" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 26,
  showText = true,
  textClassName = '',
  markClassName = 'text-[#F5F5F5]'
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* Master Official Logo Mark */}
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
        <LogoMark size={size} className={markClassName} />
      </div>

      {showText && (
        <span
          className={`font-brand font-bold text-[14px] sm:text-[15px] tracking-[0.14em] uppercase text-[#F5F5F5] inline-flex items-baseline gap-1.5 transition-colors ${textClassName}`}
        >
          <span>ITINA</span>
          <span className="text-[#F5F5F5]/90">AI</span>
        </span>
      )}
    </div>
  );
};
