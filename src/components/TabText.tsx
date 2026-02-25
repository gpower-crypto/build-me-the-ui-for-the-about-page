import React from 'react';
import { Link } from 'react-router-dom';

interface TabTextProps {
  text: string;
  active?: boolean;
  to: string;
}

const TabText: React.FC<TabTextProps> = ({ text, active = false, to }) => {
  const textStyles = "font-['Maison Neue'] font-normal text-[12px] leading-[1.3333333333333333em] tracking-[1.6666666915019352%] text-[#262626] text-center";

  return (
    <Link to={to} className={`flex flex-col items-center justify-center w-fit h-fit ${active ? 'gap-[18px] px-[12px] pt-[20px] pb-[0px]' : 'gap-[12px] px-[12px] py-[20px]'}`}>
      <span className={textStyles}>{text}</span>
      {active && <div className="w-full h-[2px] bg-[#262626]" />}
    </Link>
  );
};

export default TabText;
