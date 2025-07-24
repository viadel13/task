import { Stack, Typography, useTheme } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import HeroSection from "../../common/HeroSection/HeroSection";
import ChipUi from "../../ui/ChipUi/ChipUi";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";


const HeroContact = () => {
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
                            label={"CONTACT"}
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
                                fontSize: { xs: 30, sm: 30, md: 48 },
                                [theme.breakpoints.between("md", "mdx")]: {
                                    textAlign: "center",
                                },
                            }}
                        >
                            Prenez contact avec nous des aujourd'hui: TaskDev
                        </Typography>

                    }

                    stylesStackLeft={{
                        display: "flex",
                        flex: 2,
                        flexDirection: "column",
                        alignItems: { xs: "center", sm: "center", md: "flex-start" },

                    }}
                    stylesHeroSection={{
                        display: "flex",
                        flexDirection: "row",

                    }}
                    // stylesStackRight={{
                    //     position: "relative",
                    //     display: { xs: "none", sm: "none", md: "flex" },

                    //     [theme.breakpoints.between("md", "mdx")]: {
                    //         display: "none",
                    //     },
                    //     height: "480px",
                    //     alignItems: "center",
                    // }}
                    stylesStackRight={{

                        flex: 1,
                        position: "relative",
                        display: { xs: "none", sm: "none", md: "flex" },
                    }}
                    img={
                        <Stack>
                            <Typography>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </Typography>
                        </Stack>
                    }
                />

            </SectionContainer>
        </Stack >
    );
};
export default HeroContact;