import HeroHome from "../../component/sections/HeroHome/HeroHome";
import CompaniesHome from "../../component/sections/CompaniesHome/CompaniesHome";
import FaqHome from "../../component/sections/FaqHome/FaqHome";
import TestimonialHome from "../../component/sections/TestimonialHome/TestimonialHome";
import BannerAd from "../../component/common/BannerAd/BannerAd";

const Home = () => {
  return (
    <>
      <HeroHome />
      <CompaniesHome />
      <FaqHome />
      <TestimonialHome/>
      <BannerAd/>
     
    </>
  );
};

export default Home;
