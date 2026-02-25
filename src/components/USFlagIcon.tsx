import React from 'react';

interface USFlagIconProps extends React.SVGProps<SVGSVGElement> {}

const USFlagIcon: React.FC<USFlagIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Gradient for white/light gray */}
        <linearGradient id="grad-white" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        {/* Gradient for red */}
        <linearGradient id="grad-red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D02F44" />
          <stop offset="100%" stopColor="#B12537" />
        </linearGradient>
        {/* Gradient for blue */}
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#46467F" />
          <stop offset="100%" stopColor="#3C3C6D" />
        </linearGradient>
      </defs>
      <g>
        {/*
          NOTE: The actual SVG path data (d attribute) for the "Vector" elements
          is not provided in the Figma context.
          These elements are rendered as simple rectangles with their specified
          dimensions and fills, based on the layout properties.
          This will not accurately represent the US flag's stripes and stars
          without the precise path data.
          The order of elements is based on the Figma tree hierarchy.
        */}

        {/* I6:554;10:3471 - Base white layer */}
        <rect x="0" y="0" width="21" height="15" fill="url(#grad-white)" />

        {/* I6:554;10:3472 - Red layer (would be stripes in a real flag, currently covers white) */}
        <rect x="0" y="0" width="21" height="15" fill="url(#grad-red)" />

        {/* I6:554;10:3473 - Blue canton */}
        <rect x="0" y="0" width="9" height="7" fill="url(#grad-blue)" />

        {/* I6:554;10:3474 - White area for stars within the canton */}
        <rect x="1" y="1" width="7" height="5" fill="url(#grad-white)" />
      </g>
    </svg>
  );
};

export default USFlagIcon;
