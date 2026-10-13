import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    const handleHover = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
      }}
    >
      {/* Outer Ring */}
      <div
        className={`absolute inset-0 rounded-full border border-cyan-500/50 transition-all duration-500 ease-out ${
          isHovering ? 'w-16 h-16 bg-cyan-500/10 border-cyan-400' : 'w-10 h-10'
        } -translate-x-1/2 -translate-y-1/2`}
      />

      {/* Center Dot */}
      <div
        className={`w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
