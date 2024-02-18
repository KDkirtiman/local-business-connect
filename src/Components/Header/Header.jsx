import PropTypes from 'prop-types';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
          News
        </Typography>
        <Button color="inherit" onClick={()=>props.onClickLogin(true)}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onClickLogin: PropTypes.func
}

export { Header };
