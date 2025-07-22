import { Stack, Typography, useTheme } from "@mui/material";
import ChipUi from "../../ui/ChipUi/ChipUi";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import HeroSection from "../../common/HeroSection/HeroSection";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SmartImage from "../../common/SmartImage/SmartImage";
import imgHeroAbout from "../../../assets/images/imgHeroAbout.png"

const HeroAbout = () => {
    const theme = useTheme();

    return (
        <Stack sx={{
            paddingY: { xs: 4, sm: 4, md: 8 },
            backgroundColor: "#7D67FD0D",
        }}

        >
            <SectionContainer>
                <HeroSection
                    nameSection={
                        <ChipUi
                            label={"ABOUT"}
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
                            A dedicated team to boost your organisation

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
                            Behind TaskDev is a passionate team who want to simplify your day-to-day life and allow you to focus on what really matters.
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

                        [theme.breakpoints.between("md", "mdx")]: {
                            display: "none",
                        },
                        height: "480px",
                        alignItems: "center",
                    }}
                    img={
                        <Stack>
                            <SmartImage

                                src={imgHeroAbout}
                                alt="imgHeroAbout"
                                width={500}
                                height={"auto"}
                                sizes="(max-width: 600px) 400px, 800px"
                                className="smart-image-shrink"
                            />
                        </Stack>
                    }
                />

            </SectionContainer>
        </Stack >

    );
};
export default HeroAbout;

