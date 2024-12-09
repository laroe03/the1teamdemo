import React from 'react';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-[200%] aspect-[2/1] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 
                      animate-wave-slide" />
        <svg
          viewBox="0 0 1000 1000"
          className="absolute w-full h-full opacity-20"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 300 Q 250 250 500 300 T 1000 300 L 1000 1000 L 0 1000 Z"
            className="fill-purple-500/30 animate-wave-1"
          />
          <path
            d="M 0 300 Q 250 250 500 300 T 1000 300 L 1000 1000 L 0 1000 Z"
            className="fill-blue-500/20 translate-x-[5%] animate-wave-2"
          />
          <path
            d="M 0 300 Q 250 250 500 300 T 1000 300 L 1000 1000 L 0 1000 Z"
            className="fill-purple-600/10 translate-x-[10%] animate-wave-3"
          />
        </svg>
      </div>
    </div>
  );
}