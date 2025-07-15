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
            height: "359px",
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
          <Stack gap={1} zIndex={1} marginLeft={10} alignItems={"start"}>
            <Typography variant="body1" fontWeight={"bold"} fontSize={40}>
              Task Dev is waiting for you
            </Typography>
            <Typography variant="p" mb={1}>
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
              width: 587,
              height: 587,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 238, 221, 0.34)",
              position: "absolute",
              right: 0,
            }}
          >
            <Box
              sx={{
                width: 587,
                height: 587,
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.15)",
                position: "absolute",
                right: -90,
              }}
            />

            <Box
              sx={{
                width: 587,
                height: 587,
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.25)",
                position: "absolute",
                right: -190,
              }}
            />

            <Box
              sx={{
                width: 587,
                height: 587,
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.15)",
                position: "absolute",
                right: -290,
              }}
            />

            <Box
              sx={{
                width: 587,
                height: 587,
                borderRadius: "50%",
                backgroundColor: "rgba(23, 44, 102, 0.17)",
                position: "absolute",
                right: -390,
              }}
            />
            <Box
              sx={{
                width: 587,
                height: 587,
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
