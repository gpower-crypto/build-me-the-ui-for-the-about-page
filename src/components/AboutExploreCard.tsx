import React from 'react';

interface AboutExploreCardProps {
  imageSrc: string;
  title: string;
}

const AboutExploreCard: React.FC<AboutExploreCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col gap-[10px] flex-1 w-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[195px] object-cover"
      />
      <p className="font-['Maison Neue'] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em] text-[#4C4C4B]">
        {title}
      </p>
    </div>
  );
};

export default AboutExploreCard;
