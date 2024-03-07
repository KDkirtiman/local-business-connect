import { Autocomplete, TextField, autocompleteClasses } from "@mui/material";
import { SearchBarWrapper } from "./SearchBar.styled";
import { Search } from "@mui/icons-material";
import { TextFieldStyle } from "../AppHeader.styled";

function SearchBar(props) {
  return (
    <SearchBarWrapper>
      <Autocomplete
        sx={{marginLeft: "2em", width: "100%",
        [`& .${autocompleteClasses.popupIndicator}`]: {
          transform: "none"
        }}}
        forcePopupIcon={true}
        options={[]}
        popupIcon={<Search/>}
        renderInput={
          (params) => <div style={{padding: "0.5em"}}>
            <TextField
              {...params}
              //InputLabelProps={{style:{color: "inherit"}}} 
              sx={TextFieldStyle} 
              size={"small"} 
              variant={"outlined"} 
              placeholder={"Search"}
            />
          </div>
        }
      />
    </SearchBarWrapper>
  );
}

export {SearchBar};
