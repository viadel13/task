"use client";

import { Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Faq } from "../../../constant/links";
import { useState } from "react";

const AccordionUi = () => {
  const [expandedIndex, setExpandedIndex] = useState(false);

  return (
    <Stack>
      {Faq.map((i, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={(_, isExpanded) =>
            setExpandedIndex(isExpanded ? index : false)
          }
          sx={{
            backgroundColor: expandedIndex === index ? "#E3E3FD" : "#F2F2FE",
            my: 1,
            border: "none",
            // boxShadow: "0px 0px 8.2px rgba(0, 0, 0, 0.12)",
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span" fontWeight="bold">
              {i.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{i.response}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};
export default AccordionUi;
