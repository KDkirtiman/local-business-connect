import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import { useState } from "react";
import { TextfieldInput } from "../Profile.style";
import { AddressInformationWrapper } from "./AddressInformation.style";
import { ERROR } from "../../../Constant/ErrorConstant";

function AddressInformation(props) {

  const [isEdit, setIsEdit] = useState(false);
  const [validateInput, setValidateInput] = useState({});
  const [addressList, setAddressList] = useState([{address1Value: "address1Value"}]);

  function handleOnChangeAddressLine1(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], address1Value : value}
      return newAddrList;
    });
  }

  function renderAddressDetails(addressInfo, index) {
    const {address1Valid=true} = validateInput;
    const {address1Value=""} = addressInfo
    return (
      <AddressInformationWrapper>
        <TextfieldInput
          error={!address1Valid}
          margin="dense"
          required
          fullWidth
          id={"address1"}
          label={"Address Line 1"}
          name={"addressLine1"}
          defaultValue={address1Value}
          InputProps={{
            readOnly: isEdit
          }}
          onChange={(event) => handleOnChangeAddressLine1(event.target.value, index)}
          helperText={address1Valid ? null : ERROR.userNameErrorText}
        />
        <TextfieldInput
          error={!address1Valid}
          margin="dense"
          required
          fullWidth
          id={"address2"}
          label={"Address Line 1"}
          name={"addressLine1"}
          defaultValue={address1Value}
          InputProps={{
            readOnly: isEdit
          }}
          onChange={(event) => handleOnChangeAddressLine1(event.target.value, index)}
          helperText={address1Valid ? null : ERROR.userNameErrorText}
        />
      </AddressInformationWrapper>
    );
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        Address Information
      </AccordionSummary>
      <AccordionDetails>
        {addressList.map((address, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                Address {index+1}
              </AccordionSummary>
              <Divider/>
              <AccordionDetails>
                {renderAddressDetails(address, index)}
              </AccordionDetails>
              <Divider/>
            </Accordion>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export { AddressInformation };
