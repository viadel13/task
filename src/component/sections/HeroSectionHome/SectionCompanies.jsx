import { Stack, Typography } from "@mui/material";

const SectionCompanies = ({nameSection, img, styleSectionCompanies, styleSectionCompaniesCenter}) =>{
return(
    <Stack sx={[styleSectionCompanies, styleSectionCompaniesCenter]}>
        <Stack py={8} bgcolor={"Background.paper"}>

            <Typography variant={"h5"} color={"text.primary"} fontWeight={"bold"}>
            {nameSection}
            </Typography>

        </Stack>

        <Stack>
            {img}
        </Stack>

    </Stack>
)
}
export default SectionCompanies;