import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Icon } from "@iconify/react";
import Grid from "@mui/material/Grid";
import { Avatar, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { ClientsTestimonials } from "../../../constant/links";

const CardUi = () => {
  return (
    <Grid container spacing={2}>
      {ClientsTestimonials.map((client, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              elevation={0}
              sx={{
                maxWidth: { xs: "100%", sm: 400 },
                backgroundColor: "white",
                borderRadius: "25px",
                mb: 4,

                transform: "rotate(0deg)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: " flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack alignItems={"center"}>
                  <Avatar
                    alt="Remy Sharp"
                    src="./logo/dev.jpeg"
                    sx={{ width: 60, height: 60 }}
                  />
                </Stack>
                <Typography
                  variant="p"
                  component="div"
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {client.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  fontSize={"13px"}
                  color="#A49E9E"
                  textAlign={"center"}
                >
                  {client.pseudo}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "black", fontFamily: '"Nunito", sans-serif' }}
                  textAlign={"center"}
                >
                  {client.bio}
                </Typography>
                <Stack
                  marginTop={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "1px solid #EBEBEB",
                    borderRadius: "50%",
                  }}
                >
                  <Icon
                    icon="fluent:comment-quote-28-regular"
                    width="20"
                    height="20"
                    color="#EBEBEB"
                  />
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};
export default CardUi;
