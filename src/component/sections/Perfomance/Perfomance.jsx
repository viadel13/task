import { Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";


const Performance = () => {
    return (
        <Stack py={6} >
            <SectionContainer>
                <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                    <Stack alignItems={"center"}>

                        <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { xs: "20px", sm: "20px", md: "30px" } }}>
                            100+
                        </Typography>
                        <Typography variant="body" color={"#8D8989F0"} sx={{ fontSize: { xs: "11px", sm: "16px", md: "28px" } }}>
                            Teams Members
                        </Typography>
                    </Stack>
                    <Stack alignItems={"center"}>

                        <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { xs: "20px", sm: "20px", md: "30px" } }}>
                            100+
                        </Typography>
                        <Typography variant="body" color={"#8D8989F0"} sx={{ fontSize: { xs: "11px", sm: "16px", md: "28px" } }}>
                            Teams Members
                        </Typography>
                    </Stack>
                    <Stack alignItems={"center"}>

                        <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { xs: "20px", sm: "20px", md: "30px" } }}>
                            100+
                        </Typography>
                        <Typography variant="body" color={"#8D8989F0"} sx={{ fontSize: { xs: "11px", sm: "16px", md: "28px" } }}>
                            Teams Members
                        </Typography>
                    </Stack>
                    <Stack alignItems={"center"}>

                        <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { xs: "20px", sm: "20px", md: "30px" } }}>
                            100+
                        </Typography>
                        <Typography variant="body" color={"#8D8989F0"} sx={{ fontSize: { xs: "11px", sm: "16px", md: "28px" } }}>
                            Teams Members
                        </Typography>
                    </Stack>
                </Stack>
            </SectionContainer>

        </Stack>
    );
};
export default Performance;