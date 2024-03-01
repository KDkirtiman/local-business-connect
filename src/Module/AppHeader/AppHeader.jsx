import { AppBar, Autocomplete, Button, TextField, Toolbar } from "@mui/material";
import { HomeWrapper, SearchBarWrapper } from "./AppHeader.styled";
import { STYLE } from "../../Constant/StyleConstant";
import { AccountSection } from "./AccountSection/AccountSession";

function AppHeader(props) {

  const locationOptions = [{label:'New Delhi', value: 'newDelhi'}];

  return (
    <AppBar position="static" sx={{backgroundColor: STYLE.headerBackgroundColor}}>
      <Toolbar style={{minHeight: "2em"}}>
        <HomeWrapper>
          <Button style={{width: "fit-content"}} color='inherit'>Home</Button>
          <Autocomplete
            sx={{marginLeft: "2em", width: "60%"}}
            disablePortal
            size={"small"}
            options={locationOptions}
            renderInput={
              (params) => <div style={{padding: "0.5em"}}>
                <TextField
                  {...params}
                  InputLabelProps={{style:{color: "inherit"}}} 
                  sx={{fontSize: "0.7em", fontWeight: "bold"}} 
                  size={"small"} 
                  variant={"outlined"} 
                  label={"Location"} />
              </div>
            }
          />
        </HomeWrapper>
        <SearchBarWrapper>Item Search Bar</SearchBarWrapper>
        <AccountSection/>
      </Toolbar>
    </AppBar>
  );
}

export {AppHeader};
