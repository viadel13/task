import { Button } from "@mui/material";

const ButtonUi = ({ title, styles, variant, startIcon, onClick }) => {
  return (
    <Button
      variant={variant}
      sx={styles}
      disableElevation
      startIcon={startIcon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonUi;
