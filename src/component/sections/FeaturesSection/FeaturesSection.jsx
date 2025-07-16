import { Stack, Typography } from "@mui/material";
import SectionName from "../../common/SectionName/SectionName";
import CardFeatures from "../../Cards/CardFeatures/CardFeatures";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";

const FeaturesSection = () => {
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
      <Stack
        py={10}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <SectionName name={"FEATURES"} />
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
          }}
        >
          Whether you're a student, a freelancer or an office worker, TaskDev
          has been designed to meet your organisational needs simply and
          efficiently.
        </Typography>
      </Stack>
      <Stack>
        <SectionContainer>
          <CardFeatures />
        </SectionContainer>
      </Stack>
    </Stack>
  );
};
export default FeaturesSection;
