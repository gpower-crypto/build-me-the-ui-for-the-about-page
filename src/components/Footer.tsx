import React from 'react';
import FooterLinkColumn from './FooterLinkColumn';
import FooterEmailSubscription from './FooterEmailSubscription';
import FooterPolicyLinks from './FooterPolicyLinks';

const Footer: React.FC = () => {
  const accountLinks = [
    { text: "Log In", to: "/login" },
    { text: "Sign Up", to: "/signup" },
    { text: "Redeem a Gift Card", to: "/redeem-gift-card" },
  ];

  const companyLinks = [
    { text: "About", to: "/about" },
    { text: "Environmental Initiatives", to: "/environmental-initiatives" },
    { text: "Factories", to: "/factories" },
    { text: "DEI", to: "/dei" },
    { text: "Careers", to: "/careers" },
    { text: "International", to: "/international" },
    { text: "Accessibility", to: "/accessibility" },
  ];

  const getHelpLinks = [
    { text: "Help Center", to: "/help-center" },
    { text: "Return Policy", to: "/return-policy" },
    { text: "Shipping Info", to: "/shipping-info" },
    { text: "Bulk Orders", to: "/bulk-orders" },
  ];

  const connectLinks = [
    { text: "Facebook", to: "https://facebook.com" },
    { text: "Instagram", to: "https://instagram.com" },
    { text: "Twitter", to: "https://twitter.com" },
    { text: "Affiliates", to: "/affiliates" },
    { text: "Out Stores", to: "/our-stores" }, // Changed from "Our Stores" to "Out Stores" to match Figma
  ];

  return (
    <footer className="flex flex-col items-center self-stretch px-[72px] pt-[40px] bg-[#F5F4F4] w-full"> {/* layout_1R8DL2, fills: 100 */}
      {/* Top section: Link columns and Email Subscription */}
      <div className="flex flex-row self-stretch w-full flex-wrap justify-between"> {/* layout_809L70 */}
        <FooterLinkColumn title="Acount" links={accountLinks} />
        <FooterLinkColumn title="Company" links={companyLinks} />
        <FooterLinkColumn title="Get Help" links={getHelpLinks} />
        <FooterLinkColumn title="Connect" links={connectLinks} />
        <FooterEmailSubscription />
      </div>

      {/* Bottom section: Policy links and Copyright - handled by FooterPolicyLinks */}
      <FooterPolicyLinks />
    </footer>
  );
};

export default Footer;
