import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { Clients } from "../../../constant/links";
import StarIcon from "@mui/icons-material/Star";

const CustomerReviews = (props) => {
  return (
    <Stack
      p={2}
      backgroundColor="white"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 122,
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "auto",
        boxShadow: "0px 0px 8.2px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Stack
        width="100%"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            position: "relative",
            left: 30,
          }}
        >
          {Clients.map((client, index) => (
            <Stack
              key={index}
              spacing={5}
              sx={{
                position: "relative",
                left: `${index * -15}px`,
                top: 0,
              }}
            >
              <Avatar
                alt={client.name}
                src={client.link}
                sx={{ width: 45, height: 45 }}
              />
            </Stack>
          ))}
        </Stack>

        <Box>
          <Stack spacing={2}>
            <Typography variant="body1" fontWeight={"bold"}>
              120 + clients
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <StarIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="body1"
              fontSize={"15px"}
              sx={{
                color: "text.A100",
              }}
            >
              5.0 (3.1 Reviews)
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
export default CustomerReviews;
