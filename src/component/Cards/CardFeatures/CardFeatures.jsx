import {
  Box,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Features } from "../../../constant/links";

const CardFeatures = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      {Features.map((feature) => (
        <Stack
          key={feature.id}
          direction={{
            xs: "column",
            md: feature.id % 2 === 0 ? "row-reverse" : "row",
          }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            mb: { xs: 6, md: 10 },
            px: { xs: 2, md: 6 },
          }}
        >
          {/* Image */}
          <Card
            sx={{
              width: isMd ? 180 : "100%",
              height: "auto",
              boxShadow: "0px 8px 24px 0px #DBDBDB85",
              borderRadius: 3,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={feature.img}
                alt={feature.name}
                sx={{ objectFit: "contain", p: 2 }}
              />
            </CardActionArea>
          </Card>

          {/* Texte */}
          <Stack spacing={1} maxWidth={isMd ? 500 : "100%"}>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {feature.id}
            </Box>
            <Typography variant="h6" fontWeight="bold">
              {feature.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.desc}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default CardFeatures;
