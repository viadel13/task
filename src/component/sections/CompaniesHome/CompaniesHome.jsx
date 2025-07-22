import { Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import Companies from "../../common/Companies/Companies";

const CompaniesHome = () => {
  return (
    <Stack height={240} justifyContent={"center"} zIndex={999}>
      <SectionContainer>
        <Stack spacing={6}>
          <Typography
            variant={"h5"}
            color={"text.primary"}
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{
              fontSize: { xs: 18, sm: 24 },
            }}
          >
            Trusted by Greatest Companies
          </Typography>
          <Companies />
        </Stack>
      </SectionContainer>
    </Stack>
  );
};
export default CompaniesHome;
