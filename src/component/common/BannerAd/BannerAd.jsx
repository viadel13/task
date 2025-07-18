import { Box, Button, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import Banner from "../../../assets/images/Banner.jpg";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";

const BannerAd = () => {
  return (
    <Stack
      bgcolor={"#7D67FD0D"}
      sx={{
        paddingY: 5,
      }}
    >
      <SectionContainer>
        <Stack
          borderRadius={5}
          sx={{
            position: "relative",
            justifyContent: "center",
            alignItems: " start",
            overflow: " hidden",
            backgroundImage: `url(${Banner})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "auto",
            color: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Stack zIndex={1} sx={{
            // padding: "0 20px",
            p: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "center", md: "start" }
          }}>

            <Typography variant="body1" fontWeight={"bold"} sx={{
              fontSize: { xs: 20, sm: 30, md: 40 }
            }}>
              Task Dev is waiting for you
            </Typography>
            <Typography variant="p" mb={1} sx={{
              fontSize: { xs: 16, sm: 16, md: 20 }
            }}>
              Manage your tasks efficiently and with peace of mind with TaskDev.
              Join over 10,000 users who have already been won over
            </Typography>

            <ButtonUi
              title={" Try it for free"}
              variant={"outlined"}
              styles={{
                color: "background.default",
                borderColor: "background.default",
                padding: "10px 15px",
              }}
            />
          </Stack>
          <Box
            sx={{
              width: { xs: 300, sm: 187, md: 587 },
              height: { xs: 300, sm: 187, md: 587 },
              borderRadius: "50%",
              backgroundColor: "rgba(255, 238, 221, 0.34)",
              position: "absolute",
              right: 0,
              zIndex: 1
              // clipPath: "inset(0% 10% 0% 0%)"
            }}
          >
            <Box
              sx={{
                width: { xs: 300, sm: 187, md: 587 },
                height: { xs: 300, sm: 187, md: 587 },
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.15)",
                position: "absolute",
                right: -90,
              }}
            />

            <Box
              sx={{
                width: { xs: 300, sm: 187, md: 587 },
                height: { xs: 300, sm: 187, md: 587 },
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.25)",
                position: "absolute",
                right: -190,
              }}
            />

            <Box
              sx={{
                width: { xs: 300, sm: 187, md: 587 },
                height: { xs: 300, sm: 187, md: 587 },
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.15)",
                position: "absolute",
                right: -290,
              }}
            />

            <Box
              sx={{
                width: { xs: 300, sm: 187, md: 587 },
                height: { xs: 300, sm: 187, md: 587 },
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.17)",
                position: "absolute",
                right: -390,
              }}
            />
            <Box
              sx={{
                width: { xs: 300, sm: 187, md: 587 },
                height: { xs: 300, sm: 187, md: 587 },
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.18)",
                position: "absolute",
                right: -490,
              }}
            />
          </Box>
        </Stack>
      </SectionContainer>
    </Stack>
  );
};
export default BannerAd;
