
import React from 'react';

const UserIcon: React.FC = () => {
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
        <path d="M2.66699 10C2.66699 11.1046 3.10531 12.1654 3.88219 12.9423C4.65907 13.7192 5.71987 14.1575 6.82441 14.1575H9.17559C10.2801 14.1575 11.3409 13.7192 12.1178 12.9423C12.8947 12.1654 13.333 11.1046 13.333 10" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="4.66667" r="2.66667" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default UserIcon;
