import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider } from "@mui/material";
import { AccountInformation } from "./AccountInformation/AccountInformation";

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
        <AccountInformation/>
      </CardContent>
    </Card>
  );
}

export {Profile}
