
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutIntroText from "../components/AboutIntroText";
import AboutImageTextBlock from "../components/AboutImageTextBlock";
import AboutExploreSection from "../components/AboutExploreSection";

const About = () => {
  return (
    <div className="flex flex-col items-center w-[1400px]">
      <Header />
      <AboutHeroSection
        title="We believe\nwe can all make\na difference."
        subtitle="Our way: Exceptional quality.\nEthical factories. Radical Transparency."
        backgroundImage="url(/assets/bb1fbfea81b73e2ff9e6b2b67e620361b564f4a7.png)"
      />
      <AboutIntroText
        text="At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency."
      />
      <AboutImageTextBlock
        imageSrc="/assets/2cfee16ec9a9385944f51325a44e5e4d6e9102e7.png"
        imageAlt="Our Factories"
        heading="OUR FACTORIES"
        title="Our ethical approach."
        description="We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory."
        reverseLayout={false}
        bgColor="#E6DED8"
      />
      <img src="/assets/2d8c8e2f70569cc00059b570d2793f26148d10c0.png" alt="About Image 1" className="w-full h-[637px] object-cover" />
      <AboutImageTextBlock
        imageSrc="/assets/afc85739453c78eb5b3b264f7f2762eeea9d92e6.png"
        imageAlt="Our Quality"
        heading="OUR QUALITY"
        title="Designed\nto last."
        description="At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees."
        reverseLayout={true}
        bgColor="#E6DED8"
      />
      <img src="/assets/f3a5510db7101a4e27fa87211734b9b6a1917742.png" alt="About Image 2" className="w-full h-[560px] object-cover" />
      <AboutImageTextBlock
        imageSrc="/assets/02200f4c49680136dc43261855caa3a8a44c4c9e.png"
        imageAlt="Our Prices"
        heading="OUR PRICES"
        title="Radically Transparent."
        description="We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup."
        reverseLayout={false}
      />
      <AboutExploreSection
        title="More to Explore"
        cards={[
          {
            imageSrc: "/assets/50dcefc6c243c5664d23b56d1bef1c8f74262697.png",
            title: "Our Products",
          },
          {
            imageSrc: "/assets/aa659a9fcdd2cbbbbed8e39fa682d6b2db202797.png",
            title: "Our Stores",
          },
          {
            imageSrc: "/assets/434c641547ee46061b2eb2f19773baf0a1f12548.png",
            title: "Careers",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default About;
