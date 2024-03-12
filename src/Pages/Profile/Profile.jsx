import {  Card, CardContent } from "@mui/material";
import { AccountInformation } from "./AccountInformation/AccountInformation";
import { AddressInformation } from "./AddressInformation/AddressInformation";
import { PersonalInfromation } from "./PersonalInformation/PersonalInfromation";

function Profile(props) {
  return (
    <Card sx={{height: "100%"}}>
      <CardContent>
        <PersonalInfromation/>
        <AddressInformation/>
        <AccountInformation/>
      </CardContent>
    </Card>
  );
}

export {Profile}
