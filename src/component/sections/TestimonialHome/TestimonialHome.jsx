import { Stack, Typography } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SectionName from "../../common/SectionName/SectionName";
import CardUi from "../../ui/CardUi/CardUi";

const TestimonialHome = () => {
    return (
        <Stack bgcolor={"background.A200"} pb={20}>
            <SectionContainer>
                <Stack alignItems={"center"} marginTop={12} spacing={2} mb={8}>
                    <SectionName name={"Testimonials"} />

                    <Typography
                        variant="h3"

                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: { xs: 28, sm: 45 },
                        }}
                    > Our trusted clients</Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "center",
                        }}>
                        Our mission is to drive progress and enhance the lives of
                        our customers by delivering superior products and services
                        that exceed expectations
                    </Typography>
                </Stack>
                <CardUi />
            </SectionContainer>
        </Stack>
    );
};
export default TestimonialHome;