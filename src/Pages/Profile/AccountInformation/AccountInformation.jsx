import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Backdrop, Box, Button, CircularProgress, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { Toast } from "../../../Components/Toast/Toast";
import { AccountInformationWrapper, TextfieldInput } from "./AccountInformation.style";
import { ERROR } from "../../../Constant/ErrorConstant";

function AccountInformation(props) {

  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastDetails, setToastDetails] = useState({});
  const [validateInput, setValidateInput] = useState({});
  const [userAccountInfo, setUserAccountInfo] = useState({});

  function handleEditClick() {
    setIsEdit(true);
  }

  function handleSaveClick() {
    setToastDetails({
      isToastOpen: true,
      toastMessage: "Account Information is Updated",
      toastType: "success"
    });
    setIsEdit(false);
  }

  function handleCancelClick() {
    setIsEdit(false);
  }

  function handleToastOnClose() {
    setToastDetails({isToastOpen: false, toastMessage: ""});
  }

  function handleOnChangeUsername(value) {
    setUserAccountInfo((prevUserAccountInfo)=> {
      return (
        {
          ...prevUserAccountInfo,
          userName: value
        }
      );
    });
  }

  function handleOnChangePassword(value) {
    setUserAccountInfo((prevUserAccountInfo)=> {
      return (
        {
          ...prevUserAccountInfo,
          password: value
        }
      );
    });
  }

  function handleOnChangeAccountStatus(value) {
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

  function renderAccountLayout() {
    const {userNameValidated=true, passwordValidated=true} = validateInput;
    return (
      <AccountInformationWrapper>
        <TextfieldInput
          error={!userNameValidated}
          margin="dense"
          required
          fullWidth
          id="username"
          label="Username"
          name="userName"
          defaultValue="Kirtiman"
          InputProps={{
            readOnly: !isEdit
          }}
          onChange={(event) => handleOnChangeUsername(event.target.value)}
          helperText={userNameValidated ? null : ERROR.userNameErrorText}
        />
        <TextfieldInput
          error={!passwordValidated}
          margin="dense"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          defaultValue="Kirtiman"
          InputProps={{
            readOnly: !isEdit
          }}
          onChange={(event) => handleOnChangePassword(event.target.value)}
          helperText={passwordValidated ? null : ERROR.userNameErrorText}
        />
        <TextfieldInput
          margin="dense"
          label={"Account Creation Date"}
          defaultValue={new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]+"           "+new Date().toLocaleString()}
          InputProps={{
            readOnly: true
          }}
        />
        <TextfieldInput
          margin="dense"
          label={"Last Account Modified Date"}
          defaultValue={new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]+"           "+new Date().toLocaleString()}
          InputProps={{
            readOnly: true
          }}
        />
        <FormControl fullWidth sx={{margin: "0.5em 0"}}>
          <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
          <Select
            margin="dense"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"active"}
            label="Account Status"
            inputProps={{
              readOnly: !isEdit
            }}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"deactivated"}>Deactivated</MenuItem>
          </Select>
        </FormControl>
      </AccountInformationWrapper>
    );
  }

  function renderEditInformation() {
    return (
      <>
        { !isEdit && <div style={{textAlign: "left"}}><li><Typography variant={"caption"} align={"left"}>Click Edit button to edit the Editable fields.</Typography></li></div> }
      </>
    );
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        Account Information
      </AccordionSummary>
      <Divider/>
      <AccordionDetails>
        {renderEditInformation()}
        <Box sx={{ mt: 1 }}>
          <Backdrop open={isLoading} sx={{zIndex:2}}>
            <CircularProgress color="inherit" size={"5em"}/>
          </Backdrop>
          {renderToastMessage()}
          {renderAccountLayout()}
        </Box>
      </AccordionDetails>
      <Divider/>
      <AccordionActions>
        {
          isEdit &&
          <>
            <Button onClick={handleSaveClick}>Save</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </>
        }
        {
          !isEdit && <Button onClick={handleEditClick}>Edit</Button>
        }
        
      </AccordionActions>
    </Accordion>
  );
}

export {AccountInformation};
