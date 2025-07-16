import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import SectionName from "../../common/SectionName/SectionName";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import { BetterCard } from "../../../constant/links";

const BetterHome = () => {
    return (
        <Stack bgcolor={"background.A100"} pb={3}>

            <SectionContainer>
                <Stack alignItems={"center"} paddingTop={12} spacing={2}>
                    <SectionName name={"Better"} />

                    <Typography variant="background.paper" fontWeight={"Bold"} fontSize={36}>
                        Why it's better
                    </Typography>


                    <Typography>
                        Discover what makes Task Dev smarter than other management tools
                    </Typography>
                </Stack>
                <Grid container spacing={2} mt={4}>
                    {BetterCard.map((Features, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <Card elevation={0} sx={{
                                boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.12)",
                                backgroundColor: "white"
                            }}>
                                <CardContent key={index}>
                                    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                                        <Typography gutterBottom variant="h5" component="div" fontSize={20} fontWeight={"bold"}>
                                            {Features.name}
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#ABAAF7",
                                                width: 43,
                                                height: 43,
                                                borderRadius: "50%",
                                                display: { xs: "none", sm: "none", md: "flex" },
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                            }}
                                        >
                                            {Features.img}
                                        </Box>
                                    </Stack>
                                    <Typography variant="p" sx={{ color: 'text.secondary' }} fontSize={16}>
                                        {Features.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </SectionContainer>
        </Stack>

    );
};
export default BetterHome;