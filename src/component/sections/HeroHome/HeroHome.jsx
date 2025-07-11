import { Button, Stack, Typography, useTheme } from "@mui/material";
import HeroSection from "../../common/HeroSection/HeroSection";
import imgHeroHome from "../../../assets/images/imgHeroHome.png";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SmartImage from "../../common/SmartImage/SmartImage";
import CustomerReviews from "../../Cards/CustomerReviews/CustomerReviews";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";

const HeroHome = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        paddingY: { xs: 4, sm: 4, md: 8 },
      }}
    >
      <SectionContainer>
        <HeroSection
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
              Organise your day today life with ease
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
              Discover TaskDev , your intelligent personal assistant designed to
              simplify task management. Whether you're juggling work, study or
              everyday tasks, TaskDev helps you stay organised, focused and in
              control, all on one intuitive platform
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
                title={"Download now"}
                styles={{
                  padding: "10px 15px",
                }}
              />

              <ButtonUi
                variant={"outlined"}
                title={"Watch Video"}
                styles={{
                  padding: "10px 15px",
                  color: "text.secondary",
                  borderColor: "primary.A600",
                }}
              />
            </Stack>
          }
          stylesStackLeft={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "centre", sm: "center", md: "flex-start" },
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
                src={imgHeroHome}
                alt="Photo d'exemple"
                width={550}
                height={"auto"}
                sizes="(max-width: 600px) 400px, 800px"
                className="smart-image-shrink"
              />
            </Stack>
          }
          cardCustomerReviews={<CustomerReviews />}
        />
      </SectionContainer>
    </Stack>
  );
};

export default HeroHome;
