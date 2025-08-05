import { Stack, Typography, useTheme } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import HeroSection from "../../common/HeroSection/HeroSection";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SmartImage from "../../common/SmartImage/SmartImage";
import imgHeroFeatures from "../../../assets/images/imgHeroFeatures.png";
import CustomerReviews from "../../Cards/CustomerReviews/CustomerReviews";
import ChipUi from "../../ui/ChipUi/ChipUi";

const HeroFeatures = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        paddingY: { xs: 4, sm: 4, md: 8 },
        backgroundColor: "#7D67FD0D",
      }}
    >
      <SectionContainer>
        <HeroSection
          nameSection={
            <ChipUi
              label={"FEATURES"}
              styles={{
                borderRadius: "8px",
                color: "#907DFD",
                fontWeight: "semibold",
                backgroundColor: "#7D67FD1F",
              }}
            />
          }
          title={
            <Typography
              variant={"h3"}
              color={"secondary.main"}
              fontWeight={"bold"}
              sx={{
                textAlign: { xs: "center", sm: "center", md: "start" },
                fontSize: { xs: 40, sm: 48 },
                [theme.breakpoints.between("md", "mdx")]: {
                  textAlign: "center",
                },
              }}
            >
              Everything you need to get organised
            </Typography>
          }
          desc={
            <Typography
              variant={"body1"}
              color={"secondary.main"}
              mt={2}
              sx={{
                color: "text.A100",
                textAlign: { xs: "center", sm: "center", md: "start" },
                [theme.breakpoints.between("md", "mdx")]: {
                  textAlign: "center",
                },
              }}
            >
              Find out more about TaskDevs features, designed to make your
              day-to-day life easier
            </Typography>
          }
          button={
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                justifyContent: { xs: "center", sm: "center", md: "start" },
                [theme.breakpoints.between("md", "mdx")]: {
                  justifyContent: "center",

                  width: "100%",
                },
              }}
            >
              <ButtonUi
                variant={"contained"}
                onClick={() =>
                  (window.location.href = "https://task-todo-dusky.vercel.app/")
                }
                title={"Start now"}
                styles={{
                  padding: "10px 15px",
                }}
              />
            </Stack>
          }
          stylesStackLeft={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
            gap: 2,
          }}
          stylesHeroSection={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          stylesStackRight={{
            position: "relative",
            display: { xs: "none", sm: "none", md: "flex" },
            // "@media (min-width:900px) and (max-width:987px)": {
            //   display: "none",
            // },
            [theme.breakpoints.between("md", "mdx")]: {
              display: "none",
            },
            height: "480px",
            alignItems: "center",
          }}
          img={
            <Stack>
              <SmartImage
                src={imgHeroFeatures}
                alt="imgHeroFeatures"
                width={550}
                height={"auto"}
                sizes="(max-width: 600px) 400px, 800px"
                className="smart-image-shrink"
              />
            </Stack>
          }
        />
      </SectionContainer>
    </Stack>
  );
};
export default HeroFeatures;
