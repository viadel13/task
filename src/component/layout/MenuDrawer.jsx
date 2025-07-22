import { Links } from "../../constant/links";
import {
  Box,
  Button,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

const MenuDrawer = ({ isOpen, toggleDrawer }) => {
  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      bgcolor={"white"}
    >
      <Stack p={2}>
        <img src={"./logo/taskdev.png"} alt="taskdev" width="140" height="38" />
      </Stack>
      <List>
        {Links.map((link, index) => (
          <ListItem
            key={index}
            disablePadding
            component={Link}
            to={link.link}
            onClick={toggleDrawer(false)}
            sx={{
              color: "#000000",
            }}
          >
            <ListItemButton>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack p={2}>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            borderRadius: "8px",
            padding: "12px 20px",
            textTransform: "capitalize",
            color: "text.secondary",
            borderColor: "primary.A600",
          }}
        >
          Get started
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default MenuDrawer;
