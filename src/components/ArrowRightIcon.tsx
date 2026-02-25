import React from 'react';

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.19 7H11.82" stroke="white" strokeWidth="1" />
      <path d="M7.88 3.06L11.82 7L7.88 10.94" stroke="white" strokeWidth="1" />
    </svg>
  );
};

export default ArrowRightIcon;
