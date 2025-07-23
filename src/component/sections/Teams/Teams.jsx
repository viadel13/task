import { Stack, Typography } from "@mui/material";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import { TeamsAbout } from "../../../constant/links";
import SmartImage from "../../common/SmartImage/SmartImage";
import Grid from '@mui/material/Grid';

const Teams = () => {
    return (
        <Stack py={5}>
            <SectionContainer>

                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack>
                        <Typography variant="body1" fontSize={"50px"}  >
                            Crafting Excellence as a Team
                        </Typography>
                        <Typography variant={"body1"} color="rgba(0, 0, 0, 0.65)">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here
                        </Typography>
                    </Stack>
                    <ButtonUi title={"EXPLORE ALL"} variant={"contained"} />
                </Stack>

                <Stack direction={"row"} mt={4}>
                    <Grid container spacing={2}>
                        {
                            TeamsAbout.map((i, index) => {
                                return (
                                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                        <SmartImage
                                            src={i.img}
                                            alt={i.name}
                                            width={300}
                                            height={"auto"}
                                            sizes="(max-width: 600px) 400px, 800px"
                                            className="smart-image-shrink"
                                            styleImg={{
                                                borderRadius: "18px"
                                            }}

                                        />
                                        <Stack>
                                            <Typography fontSize={"30px"} fontWeight={"semi-bold"}>
                                                {i.name}
                                            </Typography>
                                            <Typography color="rgba(0, 0, 0, 0.65)">
                                                {i.role}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Stack>
            </SectionContainer>
        </Stack>

    );

};
export default Teams;