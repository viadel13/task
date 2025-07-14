import { Box, Button, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import Banner from "../../../assets/images/Banner.jpg"

const BannerAd = () => {
    return (
        <Stack bgcolor={"#7D67FD0D"}
            sx={{
                paddingY: 10
            }}>

            <SectionContainer>
                <Stack borderRadius={5} sx={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: " start",
                    overflow: ' hidden',
                    backgroundImage: `url(${Banner})`,
                    height: "359px",
                    color: 'white',
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.5)"
                    }
                }}>
                    <Stack gap={1} zIndex={1} marginLeft={10}>
                        <Typography variant="body1" fontWeight={"bold"} fontSize={40}>
                            Task Dev is waiting for you

                        </Typography>
                        <Typography variant="p" mb={1}>
                            Manage your tasks efficiently and with peace of mind with TaskDev. Join over 10,000 users who have already been won over
                        </Typography>
                        <Button variant="outlined" sx={{ maxWidth: "156px", color: "background.default", borderColor:"background.default"}}>
                            Try it for free
                        </Button>
                    </Stack>
                </Stack>

            </SectionContainer>

        </Stack>

    );
};
export default BannerAd;