import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions ?" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Question 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Question Question Question Question</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Question Question Question Question</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Question Question Question Question</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Question Question Question Question</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Question 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Question Question Question Question</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
