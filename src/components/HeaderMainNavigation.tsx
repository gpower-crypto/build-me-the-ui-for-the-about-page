
import React from 'react';
import Logo from './ui/icons/Logo';
import MagnifyingGlass from './ui/icons/MagnifyingGlass';
import User from './ui/icons/User';
import ShoppingCartSimple from './ui/icons/ShoppingCartSimple';

const HeaderMainNavigation: React.FC = () => {
  const navItemClasses = "text-[#262626] font-['Maison_Neue'] font-normal text-[12px] leading-[1.33em] tracking-[0.0166em] text-center";
  const tabBaseClasses = "flex flex-col gap-[12px] py-[20px] px-[12px]";

  return (
    <div className="relative flex justify-between items-center w-full px-[68px] border-b border-[#DDDBDC]">
      <div className="flex">
        <div className={tabBaseClasses}>
          <p className={navItemClasses}>Women</p>
        </div>
        <div className={tabBaseClasses}>
          <p className={navItemClasses}>Men</p>
        </div>
        <div className="flex flex-col gap-[18px] py-[20px] px-[12px] pb-0">
          <p className={navItemClasses}>About</p>
          <div className="h-[2px] w-full bg-[#262626]"></div>
        </div>
        <div className={tabBaseClasses}>
          <p className={navItemClasses}>Everworld Stories</p>
        </div>
      </div>
      <Logo className="absolute left-1/2 -translate-x-1/2 top-[21px] w-[127.62px] h-[14px] text-[#262626]" />
      <div className="flex justify-end items-center">
        <div className="flex justify-center items-center p-[12px]">
          <MagnifyingGlass className="w-[16px] h-[16px] text-[#262626]" />
        </div>
        <div className="flex justify-center items-center p-[12px]">
          <User className="w-[16px] h-[16px] text-[#262626]" />
        </div>
        <div className="flex justify-center items-center p-[12px]">
          <ShoppingCartSimple className="w-[16px] h-[16px] text-[#262626]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMainNavigation;
