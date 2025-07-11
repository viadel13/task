import { Box, Button, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SectionName from "../../common/SectionName/SectionName";
import AccordionUi from "../../ui/AccordionUi/AccordionUi";
import ButtonUi from "../../ui/ButtonUi/ButtonUi";

const FaqHome = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        height: "auto",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pb: 12,
      }}
    >
      <SectionContainer>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box />
          <Box
            sx={{
              width: { xs: 250, sm: 300, md: 300, lg: 418 },
              height: { xs: 250, sm: 300, md: 300, lg: 418 },
              backgroundColor: "background.A100",
              borderRadius: 999,
              position: "absolute",
              left: -100,
              top: -150,
            }}
          />
          <Stack position={"relative"}>
            <Box
              sx={{
                width: { xs: 150, sm: 300, md: 212, lg: 212 },
                height: { xs: 150, sm: 300, md: 212, lg: 212 },
                backgroundColor: "background.A100",
                borderRadius: 999,
                position: "absolute",
                right: 0,
                mt: 2,
              }}
            />
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box />
          <Box
            sx={{
              width: { xs: 350, sm: 600, md: 300, lg: 418 },
              height: { xs: 350, sm: 600, md: 300, lg: 418 },
              backgroundColor: "background.A100",
              borderRadius: 999,
              position: "absolute",
              left: -100,
              bottom: -150,
            }}
          />

          <Box
            sx={{
              width: { xs: 300, sm: 370, md: 650, lg: 696 },
              height: { xs: 300, sm: 370, md: 650, lg: 696 },
              display: { xs: "none", sm: "none", md: "flex" },
              backgroundColor: "background.A100",
              borderRadius: 999,
              position: "absolute",
              bottom: -150,
              right: 0,
            }}
          />
        </Stack>

        <Stack
          py={10}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <SectionName name={"FAQ"} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: 28, sm: 45 },
            }}
          >
            Frequently Asked <br /> Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
            }}
          >
            Do you have any questions? We've got the answers. Whether you're a
            new user or already use TaskDev on a daily basis, this section is
            here to guide you.
          </Typography>
          <ButtonUi
            variant={"contained"}
            title={"Get in touch"}
            styles={{
              padding: "12px 30px",
            }}
          />
        </Stack>
        <AccordionUi />
      </SectionContainer>
    </Stack>
  );
};

export default FaqHome;
