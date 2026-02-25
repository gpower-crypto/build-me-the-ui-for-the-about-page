import React from 'react';
import AboutExploreCard from './AboutExploreCard';

const AboutExploreSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full gap-[20px] py-[82px] px-4 md:px-[200px]">
      <h2 className="font-['Maison Neue'] text-[32px] leading-[1.25em] text-center text-[#000000]">
        More to Explore
      </h2>
      <div className="flex flex-col md:flex-row justify-stretch items-stretch w-full gap-[20px]">
        <AboutExploreCard
          imageSrc="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50dcefc6c243c5664d23b56d1bef1c8f74262697"
          title="Our Products"
        />
        <AboutExploreCard
          imageSrc="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa659a9fcdd2cbbbbed8e39fa682d6b2db202797"
          title="Our Stores"
        />
        <AboutExploreCard
          imageSrc="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/434c641547ee46061b2eb2f19773baf0a1f12548"
          title="Careers"
        />
      </div>
    </section>
  );
};

export default AboutExploreSection;
