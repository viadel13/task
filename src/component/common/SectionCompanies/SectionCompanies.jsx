import { Stack, Typography } from "@mui/material";

const SectionCompanies = ({ nameSection, img, styleSectionCompanies }) => {
  return (
    <Stack sx={styleSectionCompanies} spacing={8}>
      <Typography
        variant={"h5"}
        color={"text.primary"}
        fontWeight={"bold"}
        textAlign={"center"}
        sx={{
          fontSize: { xs: 18, sm: 24 },
        }}
      >
        {nameSection}
      </Typography>

      <Stack>{img}</Stack>
    </Stack>
  );
};
export default SectionCompanies;
