import React from 'react';

const Logo: React.FC = () => {
  // NOTE: The 'd' attribute for each path is a placeholder rectangle.
  //       For a faithful replication of the Figma design, these 'd' attributes
  //       need to be replaced with the actual SVG path data from the Figma export
  //       that defines the specific shapes of the logo characters.
  return (
    <svg
      width="127.62"
      height="14"
      viewBox="0 0 127.62 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <g fill="#262626">
        {/* Vector ID: I6:554;3:101;3:92 */}
        <path d="M0 0h12.23v14H0z" transform="translate(49.52, 0)" />
        {/* Vector ID: I6:554;3:101;3:93 */}
        <path d="M0 0.01h12.45v13.99H0z" transform="translate(98.32, 0.01)" />
        {/* Vector ID: I6:554;3:101;3:94 */}
        <path d="M0 0.03h11.03v13.92H0z" transform="translate(32.82, 0.03)" />
        {/* Vector ID: I6:554;3:101;3:95 */}
        <path d="M0 0.07h11.04v13.89H0z" transform="translate(116.59, 0.07)" />
        {/* Vector ID: I6:554;3:101;3:96 */}
        <path d="M0 0.05h11.06v13.88H0z" transform="translate(0, 0.05)" />
        {/* Vector ID: I6:554;3:101;3:97 */}
        <path d="M0 -0.01h13.94v14.01H0z" transform="translate(80.2, -0.01)" />
        {/* Vector ID: I6:554;3:101;3:98 */}
        <path d="M0 0.01h14.02v13.99H0z" transform="translate(14.91, 0.01)" />
        {/* Vector ID: I6:554;3:101;3:99 */}
        <path d="M0 0.05h10.09v13.9H0z" transform="translate(67.05, 0.05)" />
      </g>
    </svg>
  );
};

export default Logo;
