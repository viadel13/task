import { Stack, Typography } from "@mui/material";

const HeroSection = ({
  title,
  desc,
  button,
  nameSection,
  img,
  stylesHeroSection,
  stylesStackRight,
}) => {
  return (
    <Stack sx={stylesHeroSection}>
      <Stack sx={stylesStackRight}>
        {nameSection}
        <Typography variant={"h3"} color={"secondary.main"} fontWeight={"bold"}>
          {" "}
          {title}
        </Typography>
        <Typography
          variant={"body1"}
          color={"secondary.main"}
          mt={2}
          sx={{
            color: "text.A100",
          }}
        >
          {desc}
        </Typography>

        {button}
      </Stack>
      <Stack>{img}</Stack>
    </Stack>
  );
};
export default HeroSection;
