import PropTypes from 'prop-types';
import { Backdrop, Box, CircularProgress, Container, Grid, Modal, TextField, Typography } from "@mui/material";
import { Component } from "react";
import { CenterAlign, LabelStyle, SignUpBoxStyle, SignUpTitleStyle } from './SignUp.style';
import { ERROR } from '../../Constant/ErrorConstant';
import { ControlSection } from './ControlSection/ControlSection';
import { Toast } from '../../Components/Toast/Toast';
import { registerUserCredentials } from '../../ApiRequest/Registration/Registration';
import { LinkSection } from './LinkSection/LinkSection';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isToastOpen: false,
      usernameValidated: true,
      passwordValidated: true,
      confirmPasswordValidated: true,
      userName: '',
      password: '',
      confirmPassword: '',
      toastMessage: '',
    };
  }

  handleSubmit = async () => {
    const { userName, password, confirmPassword } = this.state;

    if ( !userName.length > 0 && !password.length > 0 ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          usernameValidated: false,
          passwordValidated: false,
        }
      });
    } else if (!userName.length > 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          usernameValidated: false,
        }
      });
    } else if (!password.length > 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          passwordValidated: false,
        }
      });
    } else if (!confirmPassword.length > 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          confirmPasswordValidated: false,
        }
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isLoading: true
        }
      });

      const response = await registerUserCredentials({userName, password});

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

        alert("User registered successfully");
      }
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        usernameValidated: (event.target.value && event.target.value.length > 0) ? true : false,
        userName: event.target.value
      }
    });
  }

  handleOnChangePassword = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        passwordValidated: (event.target.value && event.target.value.length > 0) ? true : false,
        password: event.target.value
      }
    });
  }

  handleOnChangeConfirmPassword = (event) => {
    const { password } = this.state;
    const {value=''} = event.target;
    if(value.length > 0 && value === password) {
      this.setState((prevState) => {
        return {
          ...prevState,
          confirmPassword: event.target.value,
          confirmPasswordValidated: true
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          confirmPasswordValidated: false,
          confirmPassword: event.target.value
        }
      })
    }
  }

  handleToastOnClose = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isToastOpen: false
      }
    })
  }

  renderUserNameField = () => {
    const {usernameValidated} = this.state;

    return (
      <>
        <Grid container>
          <Grid item xs={3} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>Username</strong>
            </Typography>
          </Grid>
          <Grid item xs={1} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>:</strong>
            </Typography>
          </Grid>
          <Grid item xs={8} sx={CenterAlign}>
            <TextField
              error={!usernameValidated}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Enter Username"
              name="userName"
              onChange={this.handleOnChangeUsername}
              helperText={usernameValidated ? null : ERROR.userNameErrorText}
            />
          </Grid>
        </Grid>
      </>
    );
  }

  renderPasswordField = () => {
    
    const {passwordValidated} = this.state;
    
    return (
      <>
        <Grid container>
          <Grid item xs={3} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>Password</strong>
            </Typography>
          </Grid>
          <Grid item xs={1} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>:</strong>
            </Typography>
          </Grid>
          <Grid item xs={8} sx={CenterAlign}>
            <TextField
              error={!passwordValidated}
              margin="normal"
              required
              fullWidth
              id="password"
              label="Enter Password"
              name="password"
              type="password"
              onChange={this.handleOnChangePassword}
              helperText={passwordValidated ? null : ERROR.userNameErrorText}
            />
          </Grid>
        </Grid>
      </>
    );
  }

  renderConfirmPasswordField = () => {
    
    const {confirmPasswordValidated} = this.state;
    
    return (
      <>
        <Grid container>
          <Grid item xs={3} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>Confirm Password</strong>
            </Typography>
          </Grid>
          <Grid item xs={1} sx={CenterAlign}>
            <Typography component="h5" variant="h6" sx={ LabelStyle }>
              <strong>:</strong>
            </Typography>
          </Grid>
          <Grid item xs={8} sx={CenterAlign}>
            <TextField
              error={!confirmPasswordValidated}
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              onChange={this.handleOnChangeConfirmPassword}
              helperText={confirmPasswordValidated ? null : ERROR.confirmPasswordText}
            />
          </Grid>
        </Grid>
      </>
    );
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

  render() {

    const { isLoading } = this.state;
    const { isSignUp, onClose, handleOnClickLogin} = this.props;

    return (
        <Modal open={isSignUp} onClose={() => onClose(false)}>
          <Container component="main" maxWidth={"sm"} sx={{backgroundColor: "#fff", width: "100%"}}>
            <Box sx={SignUpBoxStyle}>
              <Typography component="h6" variant="h6" sx={SignUpTitleStyle}>
                <strong>Just provide few details to Sign Up.</strong>
              </Typography>
              <Box sx={{ mt: 1, width: "100%" }}>
                <Backdrop open={isLoading} sx={{zIndex:2}}>
                  <CircularProgress color="inherit" size={"5em"} />
                </Backdrop>
                {this.renderToastMessage()}
                {this.renderUserNameField()}
                {this.renderPasswordField()}
                {this.renderConfirmPasswordField()}
                <ControlSection handleClose={() => onClose(false)} handleSubmit={this.handleSubmit}/>
                <LinkSection handleLoginClick={handleOnClickLogin}/>
              </Box>
            </Box>
          </Container>
        </Modal>
    );
  }
}

SignUp.propTypes = {
  isSignUp: PropTypes.bool,
  onClose: PropTypes.func,
  handleOnClickLogin: PropTypes.func
};

export { SignUp };
