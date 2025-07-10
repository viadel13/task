import { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Links } from "../../../constant/links";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../MenuDrawer";
import SectionContainer from "../SectionContainer/SectionContainer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        px={0}
        sx={{
          backgroundColor: "primary.100",
          borderBottom: "1px solid rgba(0, 0, 0, 0.22)",
          paddingY: { xs: 0, sm: 0, md: "12px" },
          boxShadow: "0px 0px 8.2px rgba(0, 0, 0, 0.12)",
          zIndex: 999,
        }}
      >
        <SectionContainer>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <img
              src={"./logo/taskdev.png"}
              alt="taskdev"
              width="140"
              height="38"
            />

            <Stack
              direction={"row"}
              align={"center"}
              spacing={2}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {Links.map((link, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={link.link}
                  sx={{
                    color: "#000000",
                    fontWeight: "regular",
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  <Typography>{link.name}</Typography>
                </Button>
              ))}
            </Stack>
            <Button
              variant="contained"
              disableElevation
              sx={{
                padding: "12px 20px",
                textTransform: "capitalize",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              Get started
            </Button>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{
                color: "black",
                display: { xs: "flex", sm: "flex", md: "none" },
                paddingRight: 0,
                paddingBottom: 2,
                paddingTop: 2,
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Stack>
        </SectionContainer>
      </AppBar>
      <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
export default Navbar;
