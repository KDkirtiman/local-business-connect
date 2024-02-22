import PropTypes from 'prop-types';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { ButtonStyle } from './Header.style';

function Header(props) {
  return (
    <AppBar position="static" sx={{backgroundColor: "#3366ff"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
          Home
        </Typography>
        <Button color="inherit" onClick={()=>props.onClickLogin(true)} sx={ButtonStyle}>Login</Button>
        <Button color="inherit" onClick={()=>props.onClickSignUp(true)} sx={ButtonStyle}>SignUp</Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onClickLogin: PropTypes.func,
  onClickSignUp: PropTypes.func
}

export { Header };
