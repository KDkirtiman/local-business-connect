import { Component }  from 'react';
import PropTypes from 'prop-types';
import { Toast } from '../../Components/Toast/Toast';
import { Backdrop, Box, CircularProgress, Container, Grid, Link, Modal, TextField, Typography } from '@mui/material';
import { ERROR } from '../../Constant/ErrorConstant';
import { ControlSection } from './ControlSection/ControlSection';
import { loginBoxStyle } from './Login.style';
import { authenticateUser } from '../../ApiRequest/AuthenticateUser/AuthenticateUser';
import { LinkSection } from './LinkSection/LinkSection';

class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isToastOpen: false,
      userNameValidated: true,
      passwordValidated: true,
      toastMessage: '',
      userName: '',
      password: ''
    };
  }

  handleSubmit = async () => {
    const {userName, password} = this.state;
    if(!userName || (userName.length < 1)) {
      this.setState((prevState)=> {
        return {
          ...prevState,
          userNameValidated: false
        }
      });
    } else if (!password || password.length < 1) {
      this.setState((prevState)=> {
        return {
          ...prevState,
          passwordValidated: false
        }
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isLoading: true
        }
      });

      const response = await authenticateUser({userName, password});

      if (!response || !response.transactionSuccess || response.error) {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            isToastOpen: true,
            toastMessage: response.error.message
          }
        });
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false
          }
        });

        alert("User logged in successfully");
      }

    }
  }

  handleOnChangeUsername = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        userNameValidated: (event.target.value && event.target.value.length > 0) ? true : false,
        userName: event.target.value
      }
    });
  }

  handleOnPasswordChange = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        passwordValidated: (event.target.value && event.target.value.length > 0) ? true : false,
        password: event.target.value
      }
    });
  }

  handleToastOnClose = () => {
    this.setState((prevState) => {
      return  {...prevState, isToastOpen: false};
    });
  }

  renderToastMessage = () => {
    const {isToastOpen, toastMessage} = this.state;
    return (
      <Toast
        open={isToastOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={this.handleToastOnClose}
        message={toastMessage}
        type={"error"}
        variant={"filled"}
      />
    );
  }

  renderCredentialField = () => {
    const {userNameValidated, passwordValidated} = this.state;
    return (
      <>
        <TextField
          error={!userNameValidated}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="userName"
          onChange={this.handleOnChangeUsername}
          helperText={userNameValidated ? null : ERROR.userNameErrorText}
        />
        <TextField
          error={!passwordValidated}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={this.handleOnPasswordChange}
          helperText={passwordValidated ? null : ERROR.userNameErrorText}
        />
      </>
    );
  }

  render() {
    const {isLoading} = this.state;
    const {isLogin, onClose} = this.props;
    return (
      <Modal open={isLogin} onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            onClose(false);
          }
        }}
      >
        <Container component="main" maxWidth={"xs"} sx={{backgroundColor: "#fff"}}>
          <Box sx={loginBoxStyle}>
            <Typography component="h1" variant="h5" sx={{color: "#000", paddingTop: "0.5em"}}>
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Backdrop open={isLoading} sx={{zIndex:2}}>
                <CircularProgress color="inherit" size={"5em"}/>
              </Backdrop>
              {this.renderToastMessage()}
              {this.renderCredentialField()}
              <ControlSection handleSubmit={this.handleSubmit} handleClose={() => onClose(false)}/>
              <LinkSection />
            </Box>
          </Box>
        </Container>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  isLogin: PropTypes.bool,
  onClose: PropTypes.func
}

export { LoginModal };
