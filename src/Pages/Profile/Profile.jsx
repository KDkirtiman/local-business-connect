import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider } from "@mui/material";

function Profile(props) {
  return (
    <Card sx={{height: "100%"}}>
      <CardContent>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Personal Information
          </AccordionSummary>
          <AccordionDetails>
            Personal Information
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Address Information
          </AccordionSummary>
          <AccordionDetails>
            Address Information
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Account Information
          </AccordionSummary>
          <AccordionDetails>
            Account Information
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export {Profile}
