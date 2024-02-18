import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, Link, Modal, TextField, Typography } from "@mui/material";
import { loginBoxStyle } from './Login.style';

function LoginModal({isLogin=false, ...props}) {

  function handleOnClose() {
    props.onClose(false);
  }

  function handleSubmit(value) {
    console.log("User SignIn in Progress", value);
  }

  return (
    <Modal open={isLogin} onClose={handleOnClose}>
      <Container component="main" maxWidth={"xs"} sx={{backgroundColor: "#fff"}}>
        <Box sx={loginBoxStyle}>
          <Typography component="h1" variant="h5" sx={{color: "#000", paddingTop: "0.5em"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container sx={{paddingBottom: "1em"}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
}

LoginModal.propTypes = {
  isLogin: PropTypes.bool,
  onClose: PropTypes.func
}

export {LoginModal};
