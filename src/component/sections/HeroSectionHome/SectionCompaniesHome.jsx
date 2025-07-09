import { Stack } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SectionCompanies from "./SectionCompanies";
import SmartImage from "../../common/SmartImage/SmartImage";
import  Companies  from "../../../assets/images/Companies.png";
const SectionCompaniesHome =()=>{
    return(
        <Stack py={"8"} bgcolor={"background.paper"}>
            <SectionContainer>
                <SectionCompanies
            nameSection={
                    <>Trusted by Greatest Companies</>
            }
            styleSectionCompanies={{
                display:"flex",
                flexDirection:"column",
                gap:10,

            }}
            img={
                <Stack>
                    <SmartImage
                src={Companies}
                alt={"marques"}
                width={850}
                height={"auto"}
                >

                </SmartImage>

                </Stack>
            }
            styleSectionCompaniesCenter={{
                justifyContent:"center",
                alignItems:"center",
                height: 1,
                gap:3

            }}>
                </SectionCompanies>
            </SectionContainer>
        </Stack>
    );
};
export default SectionCompaniesHome;