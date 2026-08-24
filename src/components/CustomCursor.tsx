import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops with mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [data-interactive="true"], input, textarea, select, [role="button"]');
      
      if (interactiveEl) {
        setIsHovered(true);
        const label = interactiveEl.getAttribute('data-cursor-label');
        setCursorLabel(label || null);
      } else {
        setIsHovered(false);
        setCursorLabel(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Central precision dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 0.5 : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Trailing hairline reticle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={{
          x: position.x,
          y: position.y,
          width: isHovered ? (cursorLabel ? 80 : 44) : 26,
          height: isHovered ? 44 : 26,
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 250,
          mass: 0.2,
        }}
      >
        {cursorLabel && (
          <span className="text-[9px] font-mono-tech text-white tracking-widest uppercase px-1">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </div>
  );
};
