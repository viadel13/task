import { Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const SectionName = ({ name }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Stack direction="row" alignItems="center">
        <Stack
          bgcolor="#7D67FD1F"
          sx={{
            border: "1px solid #7D67FD1F",
            position: "relative",
            left: 2,
            width: { xs: 50, sm: 100, md: 200 },
          }}
        />
        <CircleIcon
          sx={{
            color: "#9392EF",
          }}
        />
      </Stack>

      <Stack
        alignItems="center"
        justifyContent={"center"}
        sx={{
          backgroundColor: "#7D67FD1F",
          width: "100px",
          height: "30px",
          borderRadius: "8px",
        }}
      >
        <Typography
          color={"#907DFD"}
          textAlign={"center"}
          variant={"h5"}
          fontWeight={"bold"}
          fontSize={12}
          textTransform={"uppercase"}
        >
          {name}
        </Typography>
      </Stack>
      <Stack direction="row-reverse" alignItems="center">
        <Stack
          bgcolor="#7D67FD1F"
          sx={{
            border: "1px solid #7D67FD1F",
            position: "relative",
            left: -2,
            width: { xs: 50, sm: 100, md: 200 },
          }}
        />
        <CircleIcon
          sx={{
            color: "#9392EF",
          }}
        />
      </Stack>
    </Stack>
  );
};
export default SectionName;
