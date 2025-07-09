import { Stack } from "@mui/material";
import SectionContainer from "../../layout/SectionContainer/SectionContainer";
import SectionCompanies from "../../common/SectionCompanies/SectionCompanies";
import { LogosCompanies } from "../../../constant/links";
import Marquee from "react-fast-marquee";

const CompaniesHome = () => {
  return (
    <Stack py={"8"}>
      <SectionContainer>
        <SectionCompanies
          nameSection={<>Trusted by Greatest Companies </>}
          styleSectionCompanies={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "200px",
            justifyContent: "center",
          }}
          img={
            <Marquee
              gradient={false}
              speed={100}
              pauseOnHover
              style={{ maxWidth: "70vw" }}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={10}>
                {LogosCompanies.map((logo, index) => (
                  <img
                    src={logo.link}
                    alt={logo.name}
                    width={130}
                    height="auto"
                  />
                ))}
              </Stack>
            </Marquee>
          }
        />
      </SectionContainer>
    </Stack>
  );
};
export default CompaniesHome;
