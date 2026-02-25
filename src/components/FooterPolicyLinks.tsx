import React from 'react';
import { Link } from 'react-router-dom';

const FooterPolicyLinks: React.FC = () => {
  const policyLinks = [
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Terms of Service", to: "/terms-of-service" },
    { text: "Do Not Sell or Share My Personal Information", to: "/do-not-sell" },
    { text: "CS Supply Chain Transparency", to: "/supply-chain" },
    { text: "Vendor Code of Conduct", to: "/vendor-code" },
    { text: "Sitemap Pages", to: "/sitemap-pages" },
    { text: "Sitemap Products", to: "/sitemap-products" },
  ];

  return (
    <div className="flex flex-col items-center self-stretch gap-[16px] p-[16px_0px] h-fit"> {/* layout_81UCE2 */}
      <div className="flex flex-row justify-center self-stretch gap-[24px] h-fit flex-wrap"> {/* layout_2VO8WM */}
        {policyLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-[#737373] font-['Maison_Neue'] text-[12px] leading-[1.33em] tracking-[0.0166em] text-center" // Text/200, fills: 300
          >
            {link.text}
          </Link>
        ))}
      </div>
      <p className="text-[#737373] font-['Maison_Neue'] text-[12px] leading-[1.33em] tracking-[0.0166em]"> {/* Text/200, fills: 300 */}
        © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default FooterPolicyLinks;
