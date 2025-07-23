import {
  Box,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Banner from "../../../assets/images/Banner.jpg";
import { Features } from "../../../constant/links";

const CardFeatures = () => {
  return (
    <Box>
      {Features.map((feature) => (
        <Stack
          width={"100%"}
          key={feature.id}
          sx={{
            
    
            flexDirection: {
              xs: "column",
              sm: "column",
              md: feature.id % 2 === 0 ? "row-reverse" : "row",
            },
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "start", md: "center" },
            mb: 5,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Card
              sx={{
                width: 120,
                height: "100%",
                boxShadow: "0px 8px 24px 0px #DBDBDB85",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={feature.img}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Stack
              sx={{
                display: "flex",
                height: { xs: "auto", sm: "auto", md: "200px" },
                alignItems: { xs: "start", sm: "start", md: "center" },
                flexDirection: "row",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: 0, sm: 0, md: 2 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "blue",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    display: { xs: "none", sm: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Typography fontSize={"12px"}>{feature.id}</Typography>
                </Box>
                <Stack
                  sx={{
                    width: { xs: "auto", sm: "auto", md: "340px" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "blue",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      display: { xs: "flex", sm: "flex", md: "none" },
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      mt: 2,
                    }}
                  >
                    <Typography fontSize={"12px"}>{feature.id}</Typography>
                  </Box>
                  <Typography variant="p" component="div" fontWeight={"bold"}>
                    {feature.name}
                  </Typography>

                  <Typography variant="p" component="div">
                    {feature.desc}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box />
        </Stack>
      ))}
    </Box>
  );
};
export default CardFeatures;
