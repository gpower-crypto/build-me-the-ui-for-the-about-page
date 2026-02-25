
import React from 'react';

const HeaderBottomNavigation: React.FC = () => {
  const navItemClasses = "text-[#262626] font-['Maison_Neue'] font-normal text-[12px] leading-[1.33em] tracking-[0.0166em] text-center";
  const tabBaseClasses = "flex flex-col gap-[12px] py-[20px] px-[12px]";

  return (
    <div className="flex justify-center items-center w-full">
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>About</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Stores</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Factories</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Environmental Initiatives</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Our Carbon Commitment</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Annual Impact Report</p>
      </div>
      <div className={tabBaseClasses}>
        <p className={navItemClasses}>Cleaner Fashion</p>
      </div>
    </div>
  );
};

export default HeaderBottomNavigation;
