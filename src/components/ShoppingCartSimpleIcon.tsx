
import React from 'react';

const ShoppingCartSimpleIcon: React.FC = () => {
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
        {/* Placeholder for the first vector if any, but it's layout_GDWTCI which covers the whole area. */}
        <circle cx="6" cy="14" r="1" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="13" cy="14" r="1" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1H3.66667L5.83333 10.6667H14.3333C14.5323 10.6667 14.7232 10.5876 14.8658 10.445C15.0084 10.3024 15.0875 10.1115 15.0875 9.9125V9.9125C15.0875 9.7135 15.0084 9.52262 14.8658 9.37999C14.7232 9.23737 14.5323 9.15833 14.3333 9.15833H5.83333M5.83333 9.15833L5.41667 7.5L3.66667 1H1" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default ShoppingCartSimpleIcon;
