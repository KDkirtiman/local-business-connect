import { Badge, Menu, MenuItem } from "@mui/material";
import { AccountMenuWrapper } from "../AppHeader.styled";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

function AccountSection(props) {

  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOnAccountClick (event) {
    setIsOpenMenu(true);
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setIsOpenMenu(false);
  }

  function renderMenu() {
    return (
      <Menu
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
      >
        <MenuItem>Account</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Wishlist</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu>
    );
  }

  return (
    <AccountMenuWrapper>
      <Badge badgeContent={20} color="error" onClick={handleOnAccountClick}>
        <AccountCircle sx={{fontSize: "2em"}}/>
      </Badge>
      {renderMenu()}
    </AccountMenuWrapper>
  );
}

export { AccountSection }
