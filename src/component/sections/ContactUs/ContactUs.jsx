import { Box, Card, CardActionArea, CardMedia, Stack, TextField, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import Divider from '@mui/material/Divider';
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SmartImage from "../../common/SmartImage/SmartImage";
import imgContact from "../../../assets/images/imgContact.jpg"
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactUs = () => {

    const theme = useTheme();

    return (
        <Stack sx={{
            py: { xs: 4, sm: 4, md: 2 }
        }}>
            <SectionContainer>
                <Grid container py={4} spacing={8}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Stack spacing={2}>
                            <Typography variant="h3" fontSize={32} fontWeight={"bold"}>
                                Let's Talk !
                            </Typography>
                            <Typography variant="body1" color="rgba(0, 0, 0, 0.65)" mb={2}>
                                Whether you have a question about features, prices, a demonstration or anything else, our team is here to help.
                                Fill in the form and we'll get back to you as soon as possible.
                                At TaskDev, we believe that a good collaboration starts with a simple conversation.
                            </Typography>
                            <Divider />
                        </Stack>
                        <Stack
                            marginTop={4}
                            component="form"
                            // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                            spacing={3}
                        >
                            <Stack sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: { xs: "column", sm: "column", md: "row" },
                                justifyContent: { xs: "start", sm: "start", md: "space-between" },
                                gap: 4
                            }}>

                                <Stack spacing={1} width={"100%"}>
                                    <Typography>First Name</Typography>
                                    <TextField id="outlined-basic" variant="outlined" fullWidth placeholder="Enter your first name" />
                                </Stack>
                                <Stack spacing={1} width={"100%"}>
                                    <Typography>Last Name</Typography>
                                    <TextField id="outlined-basic" variant="outlined" fullWidth placeholder="Enter your last name" />
                                </Stack>

                            </Stack>
                            <Stack spacing={1} width={"100%"}>
                                <Typography>Email</Typography>
                                <TextField id="outlined-basic" variant="outlined" fullWidth placeholder="Enter your email" />
                            </Stack>
                            <Stack spacing={1} width={"100%"}>
                                <Typography>Message</Typography>
                                <TextField id="outlined-basic" variant="outlined" fullWidth placeholder="Type something..." multiline rows={4} />
                            </Stack>
                            <Stack alignItems={"start"}>
                                <ButtonUi title={"Send a message"} variant={"contained"} />
                            </Stack>
                        </Stack>

                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} >

                        <Stack spacing={2}>
                            <SmartImage src={imgContact}
                                alt={"imgContact"}
                                width={"100%"} styleImg={{ borderRadius: 8 }}
                            />
                            <Stack sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2,

                            }}>
                                <Box sx={{
                                    width: "35px",
                                    height: "35px",
                                    border: "2px solid #edede9",
                                    borderRadius: 1.3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(21, 21, 109, 0.03)"


                                }}>
                                    <Icon icon="material-symbols-light:mail-outline" width="24" height="24" color="#15156D" />
                                </Box>
                                <Stack>
                                    <Typography variant="body1" fontWeight={400}>Quick Contact</Typography>
                                    <Typography variant="body1" fontWeight={400} fontSize={12} color="rgba(0, 0, 0, 0.65)">Email: Ange@gmail.com</Typography>
                                </Stack>
                            </Stack>

                            <Stack sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2
                            }}>
                                <Box sx={{
                                    width: "35px",
                                    height: "35px",
                                    border: "2px solid #edede9",
                                    borderRadius: 1.3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(21, 21, 109, 0.03)"


                                }}>
                                    <Icon icon="solar:phone-linear" width="24" height="24" color="#15156D" />
                                </Box>
                                <Stack>
                                    <Typography variant="body1" fontWeight={400}>Phone Number</Typography>
                                    <Typography variant="body1" fontWeight={400} fontSize={12} color="rgba(0, 0, 0, 0.65)">Cameroun +237 678 776 901</Typography>
                                </Stack>
                            </Stack>
                            <Stack sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2,
                            }}>
                                <Box sx={{
                                    width: "35px",
                                    height: "35px",
                                    border: "2px solid #edede9",
                                    borderRadius: 1.3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(21, 21, 109, 0.03)"


                                }}>
                                    <Icon icon="weui:location-outlined" width="24" height="24" color="#15156D" />
                                </Box>
                                <Stack>
                                    <Typography variant="body1" fontWeight={400}>Headquater</Typography>
                                    <Typography variant="body1" fontWeight={400} fontSize={12} color="rgba(0, 0, 0, 0.65)">Douala,Cameroun</Typography>
                                </Stack>
                            </Stack>
                            <Stack spacing={2}>
                                <Typography variant="h3" fontSize={30} fontWeight={"bold"}>
                                    Follow Us
                                </Typography>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <Box sx={{
                                        width: "30px",
                                        height: "30px",

                                        borderRadius: 1.3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "primary.main"


                                    }}>
                                        <Icon icon="gg:facebook" width="20" height="20" color="white" />
                                    </Box>

                                    <Box sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: 1.3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "primary.main"


                                    }}>
                                        <Icon icon="uil:twitter" width="20" height="20" color="white" />
                                    </Box>
                                    <Box sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: 1.3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "primary.main"


                                    }}>
                                        <Icon icon="line-md:instagram" width="20" height="20" color="white" />
                                    </Box>
                                    <Box sx={{
                                        width: "30px",
                                        height: "30px",

                                        borderRadius: 1.3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "primary.main"


                                    }}>
                                        <Icon icon="ri:linkedin-fill" width="20" height="20" color="white" />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>


                    </Grid>

                </Grid>
            </SectionContainer>
        </Stack>

    );
};
export default ContactUs;