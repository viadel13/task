import Marquee from "react-fast-marquee";
import { Box, Stack } from "@mui/material";
import { LogosCompanies } from "../../../constant/links";

const Companies = () => {
  return (
    <Marquee
      gradient={false}
      speed={100}
      pauseOnHover
      style={{ maxWidth: "100vw" }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 10, sm: 15 },
          mx: 5,
        }}
      >
        {LogosCompanies.map((logo, index) => (
          <img
            key={index}
            src={logo.link}
            alt={logo.name}
            width={105}
            height="auto"
          />
        ))}
      </Stack>
    </Marquee>
  );
};

export default Companies;
