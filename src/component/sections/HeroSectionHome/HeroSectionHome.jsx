import { Button, Stack, Typography } from "@mui/material";
import HeroSection from "../../common/HeroSection/HeroSection";
import imgHeroHome from "../../../assets/images/imgHeroHome.png";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SmartImage from "../../common/SmartImage/SmartImage";

const HeroSectionHome = () => {
  return (
    <Stack py={8} bgcolor={"background.paper"}>
      <SectionContainer>
        <HeroSection
          title={
            <>
              Organise your day <br /> today life with ease !
            </>
          }
          desc={
            "Discover TaskDev , your intelligent personal assistant designed to simplify task management. Whether you're juggling work, study or everyday tasks, TaskDev helps you stay organised, focused and in control, all on one intuitive platform."
          }
          button={
            <Stack direction={"row"} spacing={2}>
              <Button
                variant={"contained"}
                disableElevation
                sx={{
                  backgroundColor: "primary.A600",
                }}
              >
                Download now
              </Button>
              <Button
                disableElevation
                variant={"outlined"}
                sx={{
                  color: "text.secondary",
                  borderColor: "primary.A600",
                }}
              >
                Watch Video
              </Button>
            </Stack>
          }
          stylesStackRight={{
            display: "flex",
            gap: 2,
          }}
          stylesHeroSection={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          img={
            <Stack>
              {/*<img*/}
              {/*  src={imgHeroHome}*/}
              {/*  alt={"imgHeroHome"}*/}
              {/*  width={550}*/}
              {/*  height={"auto"}*/}
              {/*/>*/}
              <SmartImage
                src={imgHeroHome}
                alt="Photo d'exemple"
                width={550}
                height={"auto"}
                sizes="(max-width: 600px) 400px, 800px"
              />
            </Stack>
          }
        />
      </SectionContainer>
    </Stack>
  );
};

export default HeroSectionHome;
