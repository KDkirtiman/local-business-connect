import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function PersonalInfromation(props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        Personal Information
      </AccordionSummary>
      <AccordionDetails>
        Personal Information
      </AccordionDetails>
    </Accordion>
  );
}

export { PersonalInfromation }
