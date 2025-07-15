import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Icon } from "@iconify/react";
import { Links } from "../../../constant/links";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "text.secondary",
        height: "400px",
        paddingTop:"37px",
        position:"relative"

      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Stack justifyContent={"center"}  display={"flex"} flexDirection={"column"}>
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

            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Icon
                icon="fa6-brands:x-twitter"
                width="32"
                height="32"
                style={{
                  color: "white",
                }}
              />
              <Icon
                icon="la:instagram"
                width="32"
                height="32"
                style={{
                  color: "white",
                }}
              />
              <Icon
                icon="fa6-brands:linkedin"
                width="32"
                height="32"
                style={{
                  color: "white",
                }}
              />
              <Icon
                icon="fa6-brands:facebook"
                width="32"
                height="32"
                style={{
                  color: "white",
                }}
              />
              <Stack spacing={1}>
                <Button variant="outlined" 
                        sx={{ color: "background.default",
                         borderColor: "background.default", 
                         fontWeight: "semi-bold",
                         }}>
                  <Icon icon="arcticons:back-market"
                    width="20"
                    height="32"
                    style={{
                      color: "background.default",
                      rotate: "90deg",

                    }} />
                  BACK TO TOP </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Stack sx={{ color: "background.default" }} >
            <Typography variant="body1" fontWeight={"bold"}>
              Site Map

            </Typography >
            {Links.map((Links, index) => (

              <Typography key={index} variant="body1">
                {Links.name}

              </Typography>

            ))}


          </Stack>
        </Grid>
        
        </Grid>
      <Typography variant="body1" fontWeight={"semi-bold"} sx={{color:"background.default", position:"absolute", bottom:0}}textAlign={"center"} >© TaskDev 2025.Tous droits réservés</Typography>

    </Box>
  );
};
export default Footer;
