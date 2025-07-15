import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Icon } from "@iconify/react";
import { Links } from "../../../constant/links";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SectionContainer from "../SectionContainer/SectionContainer";
import { Link } from "react-router-dom";

const Footer = () => {
  function ScrollToTopButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box
      sx={{
        backgroundColor: "text.secondary",
        // height: "430px",
        position: "relative",
        p: "37px 0",
      }}
    >
      <SectionContainer>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Stack
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              spacing={4}
              sx={{
                pb: { xs: 2, sm: 8, md: 2 },
              }}
            >
              <img
                src={"./logo/LogoFooter.png"}
                alt={"logoFooter"}
                width="140"
                height="38"
              />
              <Typography variant="body1" color={"white"}>
                Lorem ipsum dolor sit amet consectetur. Vivamus risus purus sit
                netus sit at. Habitant pharetra facilisis a arcu egestas semper
                curabitur elementum lobortis.
              </Typography>

              <Stack direction={"row"} alignItems={"center"} spacing={0}>
                <IconButton>
                  <Icon
                    icon="fa6-brands:x-twitter"
                    width="28"
                    height="28"
                    style={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Icon
                    icon="la:instagram"
                    width="30"
                    height="30"
                    style={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Icon
                    icon="fa6-brands:linkedin"
                    width="28"
                    height="28"
                    style={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Icon
                    icon="fa6-brands:facebook"
                    width="28"
                    height="28"
                    style={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </Stack>

              <Stack spacing={1}>
                <ButtonUi
                  variant="outlined"
                  styles={{
                    color: "background.default",
                    borderColor: "background.default",
                    fontWeight: "semi-bold",
                  }}
                  title={"BACK TO TOP"}
                  startIcon={
                    <Icon
                      icon="meteor-icons:angles-up"
                      width="20"
                      height="32"
                      style={{
                        color: "white",
                      }}
                    />
                  }
                  onClick={ScrollToTopButton}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "start", sm: "end", md: "end" },
              pb: { xs: 4, sm: 4, md: 2 },
            }}
          >
            <Stack direction={"row"} spacing={10}>
              <Stack sx={{ color: "background.default" }} spacing={2}>
                <Typography variant="body1" fontWeight={"bold"} mb={4}>
                  Site Map
                </Typography>
                {Links.map((Links, index) => (
                  <Typography key={index} variant="body1">
                    {Links.name}
                  </Typography>
                ))}
              </Stack>

              <Stack sx={{ color: "background.default" }} spacing={2}>
                <Typography variant="body1" fontWeight={"bold"} mb={4}>
                  Legal
                </Typography>

                <Typography variant="body1">Privacy policy</Typography>

                <Typography variant="body1">Terms of service</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      <Typography variant="body1" fontWeight={"semi-bold"} sx={{color:"background.default", position:"absolute", bottom:0}}textAlign={"center"} >© TaskDev 2025.Tous droits réservés</Typography>

    </Box>
  );
};
export default Footer;
