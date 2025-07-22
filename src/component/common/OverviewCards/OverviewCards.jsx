import { Stack } from "@mui/material";

const OverviewCards = ({ img, desc, styleContainer }) => {
    return (
        <Stack sx={styleContainer}>
            <Stack>
                {img}
            </Stack>
            <Stack>
                {desc}
            </Stack>
        </Stack>
    );
};
export default OverviewCards;