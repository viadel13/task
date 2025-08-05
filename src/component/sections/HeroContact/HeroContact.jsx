import { Stack, Typography, useTheme } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import HeroSection from "../../common/HeroSection/HeroSection";
import ChipUi from "../../ui/ChipUi/ChipUi";


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
                            Contact us today: TaskDev
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
                                Have a question, suggestion, or partnership idea? We're here to help!
                                Whether you're a freelancer, a growing startup, or a large team looking to optimize task management, our experts are ready to support you.
                                Reach out today and let's build better productivity, together.

                            </Typography>
                        </Stack>
                    }
                />

            </SectionContainer>
        </Stack >
    );
};
export default HeroContact;