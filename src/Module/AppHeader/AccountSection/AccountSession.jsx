import { Avatar, Badge, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { AccountMenuWrapper } from "../AppHeader.styled";
import { AccountCircle, Logout, PersonAdd, Settings } from "@mui/icons-material";
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
        id="account-menu"
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon style={{paddingRight: "1em"}}>
            <Avatar />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon style={{paddingRight: "1em"}}>
            <Avatar />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon style={{paddingRight: "1em"}}>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon style={{paddingRight: "1em"}}>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon style={{paddingRight: "1em"}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
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
