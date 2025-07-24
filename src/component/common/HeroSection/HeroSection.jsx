import { Stack, Typography } from "@mui/material";

const HeroSection = ({
  title,
  desc,
  button,
  nameSection,
  img,
  stylesHeroSection,
  stylesStackRight,
  stylesStackLeft,
  cardCustomerReviews,
}) => {
  return (

    <Stack sx={stylesHeroSection} direction="row" position="relative">

      <Stack sx={stylesStackLeft} >
        {/* 
        {nameSection} */}

        {title}

        {desc}

        {button}
      </Stack>

      <Stack sx={stylesStackRight}>
        {img}
        {cardCustomerReviews}
      </Stack>
    </Stack>
  );
};
export default HeroSection;
