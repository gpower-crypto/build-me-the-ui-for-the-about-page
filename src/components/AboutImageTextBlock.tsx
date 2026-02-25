
import React from 'react';

interface AboutImageTextBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  heading: string;
  description: string;
  reverse?: boolean;
}

const AboutImageTextBlock: React.FC<AboutImageTextBlockProps> = ({
  imageSrc,
  imageAlt,
  title,
  heading,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-stretch self-stretch w-full min-h-[500px] ${
        reverse ? 'md:flex-row-reverse bg-[#E6DED8]' : 'bg-[#E6DED8]'
      }`}
    >
      <div className="flex-1 overflow-hidden relative min-h-[300px] md:min-h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center self-stretch flex-1 w-full h-full gap-5 px-[30px] md:px-[70px] py-10 md:py-0">
        <div className="flex flex-col self-stretch w-full">
          <p className="font-['Maison_Neue'] font-semibold text-[12px] leading-[1.33] tracking-[0.0166em] text-black uppercase mb-2">
            {title}
          </p>
          <h2 className="font-['Maison_Neue'] font-normal text-[32px] md:text-[40px] leading-[1.2] tracking-[0.005em] text-black mb-4">
            {heading}
          </h2>
        </div>
        <p className="font-['Maison_Neue'] font-normal text-[14px] leading-[1.2] tracking-[0.0999em] text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutImageTextBlock;
