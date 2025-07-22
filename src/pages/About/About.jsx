import HeroAbout from "../../component/sections/HeroAbout/HeroAbout";
import Performance from "../../component/sections/Perfomance/Perfomance";
import Evolution from  "../../component/sections/Evolution/Evolution";
import Teams from "../../component/sections/Teams/Teams";
import BannerAd from "../../component/common/BannerAd/BannerAd";
const About = () => {
  return (
    <>
      <HeroAbout />
      <Performance />
      <Evolution/>
      <Teams/>
      <BannerAd/>

    </>
  );
};

export default About;
