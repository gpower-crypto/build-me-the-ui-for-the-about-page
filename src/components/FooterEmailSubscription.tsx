import React from 'react';
import ArrowRightIcon from './ArrowRightIcon';

const FooterEmailSubscription: React.FC = () => {
  return (
    <div className="flex flex-row p-[20px] w-fit h-fit"> {/* layout_TDDIG5 */}
      <div className="flex flex-row items-center gap-[10px] p-[18px_15px] w-[388px] h-fit bg-[#FFFFFF] border border-[#DDDBDC]"> {/* layout_TQ8LTW, fills: white, strokes: 200 */}
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 bg-transparent border-none outline-none text-[#737373] font-['Maison_Neue'] text-[14px] leading-[1.2em] tracking-[0.01em] placeholder:text-[#737373]"
        />
      </div>
      <button className="flex flex-row gap-[10px] p-[14.5px_14px] w-fit h-fit bg-[#262626] border border-[#262626] text-white"> {/* layout_ZYTC3W, fills: 500, strokes: 500. Added text-white for icon color */}
        <ArrowRightIcon className="w-[24px] h-[24px]" /> {/* ArrowRightIcon, assuming it uses currentColor */}
      </button>
    </div>
  );
};

export default FooterEmailSubscription;
