import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkColumnProps {
  title: string;
  links: { text: string; to: string }[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[20px] p-[20px] flex-1 h-fit"> {/* layout_V12UKA */}
      <p className="text-[#262626] font-['Maison_Neue'] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em]"> {/* Text/400 - demi, fills: 500 */}
        {title}
      </p>
      <div className="flex flex-col gap-[10px] self-stretch h-fit"> {/* layout_CLZGPJ */}
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-[#737373] font-['Maison_Neue'] text-[14px] leading-[1.2em] tracking-[0.01em]" // Text/300, fills: 300
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkColumn;
