import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Backdrop, Box, Button, CircularProgress, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { TextfieldInput } from "../Profile.style";
import { AddressInformationWrapper } from "./AddressInformation.style";
import { ERROR } from "../../../Constant/ErrorConstant";
import { Toast } from "../../../Components/Toast/Toast";

function AddressInformation(props) {

  const [toastDetails, setToastDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [validateInput, setValidateInput] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([{label: "New Delhi", value: "newDelhi"}])
  const [addressList, setAddressList] = useState([{addressLine1Value: "address1Value"}]);

  function handleEditClick(index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], isEdit : true}
      return newAddrList;
    });
  }

  function handleSaveClick(index) {
    setToastDetails({
      isToastOpen: true,
      toastMessage: "Address is Updated",
      toastType: "success"
    });
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], isEdit : false}
      return newAddrList;
    });
  }

  function handleCancelClick(index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], isEdit : false}
      return newAddrList;
    });
  }

  function handleOnChangeAddressLine1(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], addressLine1Value : value}
      return newAddrList;
    });
  }

  function handleOnChangeCity(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], cityValue : value}
      return newAddrList;
    });
  }

  function handleOnChangeState(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], stateValue : value}
      return newAddrList;
    });
  }

  function handleOnChangeCountry(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], countryValue : value}
      return newAddrList;
    });
  }

  function handleOnChangeZipCode(value, index) {
    setAddressList((prevValue)=>{
      let newAddrList = [...prevValue]
      newAddrList[index] = {...prevValue[index], zipCodeValue : value}
      return newAddrList;
    });
  }

  function handleAddNewAddress() {
    setAddressList((prevValue) => {
      return [...prevValue, {isEdit:true, defaultExpanded: true}]
    })
  }

  function handleDeleteAddress(index) {
    setAddressList((prevValue) => {
      let newAddrList = prevValue.filter((address, i) => i!=index);
      return newAddrList;
    })
  }

  function renderEditInformation(isEdit) {
    return (
      <>
        { !isEdit && <div style={{textAlign: "left"}}><li><Typography variant={"caption"} align={"left"}>Click Edit button to edit the Editable fields.</Typography></li></div> }
      </>
    );
  }

  function handleToastOnClose() {
    setToastDetails({isToastOpen: false, toastMessage: ""});
  }

  function renderToastMessage() {
    const {isToastOpen=false, toastMessage="Error while updating the field.", toastType="error"} = toastDetails;
    return (
      <Toast
        open={isToastOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleToastOnClose}
        message={toastMessage}
        type={toastType}
        variant={"filled"}
      />
    );
  }

  function renderAddressDetails(addressInfo, index) {
    const {addressLine1Valid=true} = validateInput;
    const {isEdit=false, addressLine1Value="", addressLine2Value="", cityValue="", stateValue="", countryValue="", zipCodeValue=""} = addressInfo
    return (
      <AddressInformationWrapper>
        <TextfieldInput
          error={!addressLine1Valid}
          margin="dense"
          fullWidth
          id={"address1"}
          label={"Address Line 1"}
          name={"addressLine1"}
          defaultValue={addressLine1Value}
          InputProps={{
            readOnly: isEdit
          }}
          onChange={(event) => handleOnChangeAddressLine1(event.target.value, index)}
          helperText={addressLine1Valid ? null : ERROR.userNameErrorText}
        />
        <TextfieldInput
          margin="dense"
          required
          fullWidth
          id={"address2"}
          label={"Address Line 2"}
          name={"addressLine2"}
          defaultValue={addressLine2Value}
          InputProps={{
            readOnly: !isEdit
          }}
          onChange={(event) => handleOnChangeAddressLine1(event.target.value, index)}
        />
        <div style={{display: "flex", flexDirection: "row"}}>
          <FormControl sx={{margin: "0.5em 0", width: "34%"}}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cityValue}
              label={"City"}
              sx={{width: "91%"}}
              inputProps={{
                readOnly: !isEdit
              }}
            >
              {cityList.map((cityDetails) => {
                return (
                  <MenuItem
                    key={cityDetails.label}
                    value={cityDetails.value}
                    onChange={(event) => handleOnChangeCity(event.target.value, index)}
                  >
                    {cityDetails.label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl sx={{margin: "0.5em 0", width: "33%"}}>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              margin="dense"
              labelId="state-label"
              id="state-select"
              value={stateValue}
              label={"State"}
              sx={{width: "90%"}}
              inputProps={{
                readOnly: !isEdit
              }}
            >
              {stateList.map((stateDetails) => {
                return (
                  <MenuItem
                    key={stateDetails.label}
                    value={stateDetails.value}
                    onChange={(event) => handleOnChangeState(event.target.value, index)}
                  >
                    {stateDetails.label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl sx={{margin: "0.5em 0", width: "33%"}}>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              margin="dense"
              labelId="country-label"
              id="country-select"
              value={countryValue}
              label={"Country"}
              sx={{width: "90%"}}
              inputProps={{
                readOnly: !isEdit
              }}
            >
              {countryList.map((countryDetails) => {
                return (
                  <MenuItem
                    key={countryDetails.label}
                    value={countryDetails.value}
                    onChange={(event) => handleOnChangeCountry(event.target.value, index)}
                  >
                    {countryDetails.label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <TextfieldInput
          margin="dense"
          required
          id={"zipCode"}
          label={"ZipCode/Postal Code"}
          name={"zipCode"}
          defaultValue={zipCodeValue}
          sx={{width: "31%"}}
          InputProps={{
            readOnly: !isEdit
          }}
          onChange={(event) => handleOnChangeZipCode(event.target.value, index)}
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
          const {isEdit=false, defaultExpanded=false} = address;
          return (
            <Accordion key={index} defaultExpanded={defaultExpanded}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                Address {index+1}
              </AccordionSummary>
              <Divider/>
              <AccordionDetails>
                {renderEditInformation(isEdit)}
                <Box sx={{ mt: 1 }}>
                  <Backdrop open={isLoading} sx={{zIndex:2}}>
                    <CircularProgress color="inherit" size={"5em"}/>
                  </Backdrop>
                  {renderToastMessage()}
                  {renderAddressDetails(address, index)}
                </Box>
              </AccordionDetails>
              <Divider/>
              <AccordionActions>
                {
                  isEdit &&
                  <>
                    <Button onClick={handleSaveClick}>Save</Button>
                    <Button onClick={() => handleCancelClick(index)}>Cancel</Button>
                  </>
                }
                {
                  !isEdit &&
                  <>
                    <Button onClick={() => handleEditClick(index)}>Edit</Button>
                    <Button onClick={() => handleDeleteAddress(index)}>Delete</Button>
                  </>
                }
                
              </AccordionActions>
            </Accordion>
          );
        })}
      </AccordionDetails>
      <Divider/>
      <AccordionActions>
        <Button onClick={handleAddNewAddress}>Add New Address</Button>
      </AccordionActions>
    </Accordion>
  );
}

export { AddressInformation };
