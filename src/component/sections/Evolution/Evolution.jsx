import { Card, CardActionArea, CardMedia, Stack, Typography } from "@mui/material";
import OverviewCards from "../../common/OverviewCards/OverviewCards";
import SmartImage from "../../common/SmartImage/SmartImage";
import imgEvolution from "../../../assets/images/imgEvolution.jpg"
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import { Icon } from "@iconify/react";
import OurHistory from "../../../assets/images/OurHistory.jpg";
import OurVision from "../../../assets/images/OurVision.jpg";
const Evolution = () => {

    return (
        <Stack py={12} sx={{ backgroundColor: "background.paper", }} >
            <SectionContainer>
                <Stack spacing={18}>

                    <OverviewCards
                        img={
                            // <SmartImage
                            //     src={imgEvolution}
                            //     alt="Photo d'exemple"
                            //     width={550}
                            //     height={"auto"}
                            //     sizes="(max-width: 600px) 400px, 800px"
                            //     className="smart-image-shrink"
                            //     styleImg={{
                            //         borderRadius: "18px"
                            //     }}

                            // />
                            <Card
                                sx={{
                                    width: "auto",
                                    height: "100%",
                                    boxShadow: "0px 8px 24px 0px #DBDBDB85",
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={imgEvolution}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>

                        }

                        desc={
                            <Stack spacing={2}>
                                <Typography variant={"body1"} fontSize={"50px"}>
                                    Our Mission
                                </Typography>
                                <Typography variant={"body1"} color="rgba(0, 0, 0, 0.65)">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Typography>
                                <Stack spacing={1}>


                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        }
                        styleContainer={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", md: "row" },
                            width: "100%",
                            gap: 4,
                        }}

                    />

                    <OverviewCards
                        img={
                            <SmartImage
                                src={OurVision}
                                alt="Photo d'exemple"
                                width={550}
                                height={"auto"}
                                sizes="(max-width: 600px) 400px, 800px"
                                className="smart-image-shrink"
                                styleImg={{
                                    borderRadius: "18px"
                                }}

                            />

                        }

                        desc={
                            <Stack spacing={2}>
                                <Typography variant={"body1"} fontSize={"50px"}>
                                    Our Vision
                                </Typography>
                                <Typography variant={"body1"} color="rgba(0, 0, 0, 0.65)">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Typography>
                                <Stack spacing={1}>


                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        }
                        styleContainer={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", md: "row-reverse" },
                            width: "100%",
                            gap: 4,
                        }}

                    />


                    <OverviewCards
                        img={
                            <SmartImage
                                src={OurHistory}
                                alt="Photo d'exemple"
                                width={550}
                                height={"auto"}
                                sizes="(max-width: 600px) 400px, 800px"
                                className="smart-image-shrink"
                                styleImg={{
                                    borderRadius: "18px"
                                }}

                            />

                        }

                        desc={
                            <Stack spacing={2}>
                                <Typography variant={"body1"} fontSize={"50px"}>
                                    Our History
                                </Typography>
                                <Typography variant={"body1"} color="rgba(0, 0, 0, 0.65)">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Typography>
                                <Stack spacing={1}>


                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)" >

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Icon icon="line-md:check-all" width="24" height="24" color="#15156D" />

                                        <Typography color="rgba(0, 0, 0, 0.65)">

                                            Many desktop publishing packages and web page editors
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        }
                        styleContainer={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", md: "row" },
                            width: "100%",
                            gap: 4,
                        }}

                    />

                </Stack>
            </SectionContainer>
        </Stack>

    );
};
export default Evolution;