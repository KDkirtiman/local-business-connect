import { Grid, Link } from '@mui/material';
import PropTypes from 'prop-types';
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
          <LinkSectionStyled variant="body2">
            {"Don't have an account? Sign Up"}
          </LinkSectionStyled>
        </Grid>
      </Grid>
    </>
  );
}

LinkSection.propTypes = {};

export { LinkSection };
