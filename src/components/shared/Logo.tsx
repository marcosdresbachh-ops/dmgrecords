import React from 'react';

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'default' | 'on-dark';
}

export function Logo({ className, width = "125", height = "42", variant = 'default' }: LogoProps) {
  const textColor = variant === 'on-dark' ? 'white' : '#1A3A9C';
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 140"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="amor-fm-logo-gradient" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FF3055" />
          <stop offset="50%" stopColor="#E60023" />
          <stop offset="100%" stopColor="#A80016" />
        </linearGradient>
        <filter id="amor-fm-logo-glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="0"
        y="118"
        fontFamily="'Nunito', 'Arial Rounded MT Bold', sans-serif"
        fontSize="124"
        fontWeight="900"
        fontStyle="italic"
        fill={textColor}
      >
        Am
      </text>
      <g filter="url(#amor-fm-logo-glow)" transform="translate(207, 22)">
        <path
          d="M38,76 C38,76 0,51 0,24 C0,11 9,0 21,0 C29,0 35,5 38,11 C41,5 47,0 55,0 C67,0 76,11 76,24 C76,51 38,76 38,76 Z"
          fill="url(#amor-fm-logo-gradient)"
        />
        <path
          d="M17,9 C14,9 8,14 7,22"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <text
        x="282"
        y="118"
        fontFamily="'Nunito', 'Arial Rounded MT Bold', sans-serif"
        fontSize="124"
        fontWeight="900"
        fontStyle="italic"
        fill={textColor}
      >
        r
      </text>
    </svg>
  );
}
