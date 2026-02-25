
import React from 'react';
import ArrowRight from './ui/icons/ArrowRight';
import UsFlag from './ui/icons/UsFlag';

const HeaderTopBar: React.FC = () => {
  return (
    <div className="relative bg-black py-[7px] px-[30px] flex justify-between items-stretch w-full">
      <div className="flex items-center justify-center gap-[4px] flex-grow">
        <p className="text-white font-['Maison_Neue'] font-semibold text-[12px] leading-[1.33em] tracking-[0.0166em] text-center">
          Get early access on launches and offers.
        </p>
        <p className="text-white font-['Maison_Neue'] font-normal text-[12px] leading-[1.33em] tracking-[0.0166em] text-center underline">
          Sign Up For Texts
        </p>
        <ArrowRight className="w-[14px] h-[14px] text-white" />
      </div>
      <div className="absolute right-[30px] top-[7px] flex items-center gap-[12px]">
        <UsFlag className="w-[21px] h-[15px]" />
        <p className="text-white font-['Maison_Neue'] font-normal text-[12px] leading-[1.33em] tracking-[0.0166em] text-center">
          USD
        </p>
      </div>
    </div>
  );
};

export default HeaderTopBar;
