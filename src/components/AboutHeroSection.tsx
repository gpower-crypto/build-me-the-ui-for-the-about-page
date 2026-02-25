import React from 'react';

const AboutHeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-[691px] gap-[10px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://www.figma.com/file/mpUju8jQNgo3YvulsV63mR/image/bb1fbfea81b73e2ff9e6b2b67e620361b564f4a7)' }}
    >
      <div className="flex flex-col items-center w-[488px] gap-[16px]">
        <h1 className="font-['Maison_Neue'] font-normal text-[70px] leading-[1.2em] tracking-[0.002857em] text-center text-white">
          We believe
          <br />
          we can all make
          <br />a difference.
        </h1>
        <p className="font-['Maison_Neue'] font-normal text-[24px] leading-[1.385em] text-center text-white">
          Our way: Exceptional quality.
          <br />
          Ethical factories. Radical Transparency.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
