import { CardActionArea, CardMedia, Stack, Typography } from "@mui/material";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import { TeamsAbout } from "../../../constant/links";
import SmartImage from "../../common/SmartImage/SmartImage";
import Grid from "@mui/material/Grid";
import imgEvolution from "../../../assets/images/imgEvolution.jpg";

const Teams = () => {
  return (
    <Stack py={5}>
      <SectionContainer>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: { xs: "start", sm: "start", md: "space-between" },
            alignItems: { xs: "start", sm: "start", md: "center" },
            width: "100%",
            gap: 4,
          }}
        >
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 35, sm: 35, md: 50 },
              }}
            >
              Crafting Excellence as a Team
            </Typography>
            <Typography variant={"body1"} color="rgba(0, 0, 0, 0.65)">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <br /> The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              Content here, content here
            </Typography>
          </Stack>
          <ButtonUi title={"EXPLORE ALL"} variant={"contained"} />
        </Stack>

        <Grid container spacing={4} mt={4}>
          {TeamsAbout.map((i, index) => {
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack spacing={2}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: "auto", sm: "auto", md: "350px" },
                        borderRadius: "18px",
                      }}
                      image={i.img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                  <Stack>
                    <Typography
                      fontWeight={"semi-bold"}
                      sx={{
                        fontSize: { xs: "20px", sm: "20px", md: "25px" },
                      }}
                    >
                      {i.name}
                    </Typography>
                    <Typography color="rgba(0, 0, 0, 0.65)">
                      {i.role}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </SectionContainer>
    </Stack>
  );
};
export default Teams;
