import { Button } from "@mui/material";

const ButtonUi = ({ title, styles, variant }) => {
  return (
    <Button variant={variant} sx={styles} disableElevation>
      {title}
    </Button>
  );
};

export default ButtonUi;
