import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { LinkSectionStyled } from './LinkSection.styled';

function LinkSection(props) {
  return (
    <>
      <Grid container sx={{paddingBottom: "1em"}}>
        <Grid item xs>
          <LinkSectionStyled variant="body2">
            Forgot password?
          </LinkSectionStyled>
        </Grid>
        <Grid item>
          <LinkSectionStyled variant="body2" onClick={() => props.handleSignUpClick(true)}>
            {"Don't have an account? Sign Up"}
          </LinkSectionStyled>
        </Grid>
      </Grid>
    </>
  );
}

LinkSection.propTypes = {
  handleSignUpClick: PropTypes.func
};

export { LinkSection };
