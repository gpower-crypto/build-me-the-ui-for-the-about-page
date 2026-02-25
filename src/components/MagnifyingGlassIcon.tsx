
import React from 'react';

const MagnifyingGlassIcon: React.FC = () => {
  return (
    <div className="relative w-4 h-4">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
      >
        {/* Placeholder for the first vector if any, but it's layout_GDWTCI which covers the whole area.
            The actual drawing seems to be done by the stroked vectors. */}
        {/* <path d="..." fill="none"/> */}
        <circle cx="7.33333" cy="7.33333" r="5.33333" stroke="#262626" strokeWidth="2"/>
        <path d="M11.1001 11.1001L13.9001 13.9001" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default MagnifyingGlassIcon;
