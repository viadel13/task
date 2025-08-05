import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import OverviewCards from "../../common/OverviewCards/OverviewCards";
import SmartImage from "../../common/SmartImage/SmartImage";
import imgEvolution from "../../../assets/images/imgEvolution.jpg";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import { Icon } from "@iconify/react";
import OurHistory from "../../../assets/images/OurHistory.jpg";
import OurVision from "../../../assets/images/OurVision.jpg";

const Evolution = () => {
  const theme = useTheme();
  const nom = "delvia";

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        py: {
          xs: 5,
          sm: 5,
          md: 12,
        },
      }}
    >
      <SectionContainer>
        <Stack spacing={18}>
          <OverviewCards
            img={
              // <SmartImage
              //     src={imgEvolution}
              //     alt="Photo d'exemple"
              //     width={550}
              //     height={"auto"}
              //     sizes="(max-width: 600px) 400px, 800px"
              //     className="smart-image-shrink"
              //     styleImg={{
              //         borderRadius: "18px"
              //     }}

              // />
              <Card
                sx={{
                  width: {
                    xs: "auto",
                    sm: "auto",
                    md: "500px",
                    lg: "550px",
                  },
                  [theme.breakpoints.between("md", "mdx")]: {
                    width: "100%",
                  },
                  height: "auto",
                  boxShadow: "0px 8px 24px 0px #DBDBDB85",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={imgEvolution}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            }
            desc={
              <Stack spacing={2}>
                <Typography
                  variant={"body1"}
                  sx={{
                    fontSize: { xs: 35, sm: 35, md: 50 },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant={"body1"}
                  color="rgba(0, 0, 0, 0.65)"
                  sx={{
                    fontSize: { xs: 15, sm: 15, md: 18 },
                  }}
                >
                  Our mission is to simplify the way teams and individuals manage their work.
                  We provide a smart, intuitive, and collaborative task management solution that helps you stay focused, organized, and efficient — no matter where you are.
                  By combining user-friendly design with powerful features, we help people turn their goals into results, one task at a time.
                </Typography>
                <Stack spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Simplicity meets productivity
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Collaboration without complexity                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
Respect for your time and focus                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
Continuous improvement based on real needs                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            }
            styleContainer={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              width: "100%",
              gap: 4,
              [theme.breakpoints.between("md", "mdx")]: {
                flexDirection: "column",
              },
            }}
          />

          <OverviewCards
            img={
              <Card
                sx={{
                  width: {
                    xs: "auto",
                    sm: "auto",
                    md: "500px",
                    lg: "550px",
                  },
                  height: "auto",
                  boxShadow: "0px 8px 24px 0px #DBDBDB85",
                  [theme.breakpoints.between("md", "mdx")]: {
                    width: "100%",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={OurVision}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            }
            desc={
              <Stack spacing={2}>
                <Typography
                  variant={"body1"}
                  sx={{
                    fontSize: { xs: 35, sm: 35, md: 50 },
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant={"body1"}
                  color="rgba(0, 0, 0, 0.65)"
                  sx={{
                    fontSize: { xs: 15, sm: 15, md: 18 },
                  }}
                >
                  We envision a world where every task has its place, every goal a clear path, and every team the tools to work in harmony.
                  Our goal is to become the preferred task management solution for professionals, teams, and organizations worldwide — empowering them to do more, stress less, and achieve better outcomes.
                  With a focus on usability, automation, and integration, we’re building the future of smart work.

                  
                </Typography>
                <Stack spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
Seamless task and project tracking                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Empowered, autonomous teams

                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Integration with your favorite tools

                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Smart reminders and automation

                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            }
            styleContainer={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row-reverse" },
              width: "100%",
              gap: 4,
              [theme.breakpoints.between("md", "mdx")]: {
                flexDirection: "column",
              },
            }}
          />

          <OverviewCards
            img={
              <Card
                sx={{
                  width: {
                    xs: "auto",
                    sm: "auto",
                    md: "500px",
                    lg: "550px",
                  },
                  height: "auto",
                  [theme.breakpoints.between("md", "mdx")]: {
                    width: "100%",
                  },
                  boxShadow: "0px 8px 24px 0px #DBDBDB85",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={OurHistory}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            }
            desc={
              <Stack spacing={2}>
                <Typography
                  variant={"body1"}
                  sx={{
                    fontSize: { xs: 35, sm: 35, md: 50 },
                  }}
                >
                  Our History
                </Typography>
                <Typography
                  variant={"body1"}
                  color="rgba(0, 0, 0, 0.65)"
                  sx={{
                    fontSize: { xs: 15, sm: 15, md: 18 },
                  }}
                >
                  What started as a simple idea — helping people manage their day better — has grown into a complete task management platform used by teams across industries.
                  From our first prototype to today’s feature-rich app, we’ve listened to users, learned from their needs, and evolved.
                  Our journey is guided by one goal: making work easier, clearer, and more satisfying for everyone.
                </Typography>
                <Stack spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Initial launch with core features in 2025

                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Cross-platform apps released in 2025

                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      100K+ tasks completed via our platform

                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Icon
                      icon="line-md:check-all"
                      width="24"
                      height="24"
                      color="#15156D"
                    />

                    <Typography color="rgba(0, 0, 0, 0.65)">
                      Recognized by users for simplicity and impact

                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            }
            styleContainer={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              width: "100%",
              gap: 4,
              [theme.breakpoints.between("md", "mdx")]: {
                flexDirection: "column",
              },
            }}
          />
        </Stack>
      </SectionContainer>
    </Stack>
  );
};
export default Evolution;
