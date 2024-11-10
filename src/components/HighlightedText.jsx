import React from 'react';

const HighlightedText = ({ text }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 text-white">{text}</span>
      <svg
        className="absolute -bottom-0.5 left-0 w-full h-3 z-0"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q30,2 50,10 Q70,18 100,10 L100,20 L0,20 Z"
          className="fill-zinc-500"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,10 Q30,2 50,10 Q70,18 100,10 L100,20 L0,20 Z;
              M0,10 Q30,18 50,10 Q70,2 100,10 L100,20 L0,20 Z;
              M0,10 Q30,2 50,10 Q70,18 100,10 L100,20 L0,20 Z"
          />
        </path>
      </svg>
    </span>
  );
};

export default HighlightedText;
