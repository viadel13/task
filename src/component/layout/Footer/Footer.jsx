import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "text.secondary",
        height: "400px",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Stack justifyContent={"center"}>
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
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}></Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
