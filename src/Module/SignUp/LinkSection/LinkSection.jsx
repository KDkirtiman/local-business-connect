import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { LinkSectionStyled } from '../../Login/LinkSection/LinkSection.styled';

function LinkSection(props) {
  return (
    <>
      <Grid container sx={{paddingBottom: "1em"}}>
        <Grid item>
          <LinkSectionStyled variant="body2" onClick={() => props.handleLoginClick(true)}>
            {"Already Have an account? Sign In"}
          </LinkSectionStyled>
        </Grid>
      </Grid>
    </>
  );
}

LinkSection.propTypes = {
    handleLoginClick: PropTypes.func
};

export { LinkSection };
