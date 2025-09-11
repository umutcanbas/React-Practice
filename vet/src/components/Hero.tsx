import HeroImageContainer from "./HeroImageContainer";
import HeroTextContainer from "./HeroTextContainer";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-teal-50 py-20 w">
      <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
        {/*
            grid-cols-1: Mobilde yukarıdan aşağıya dizilsin
            grid-cols-2: Desktop-ta iki tane sütun olup soldan sağa dizilecek
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <HeroTextContainer />
          <HeroImageContainer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
