import PropTypes from 'prop-types';
import { Button, Grid } from "@mui/material";

function ControlSection(props) {
  return (
    <>
      <Grid container >
        <Grid item xs sx={{ paddingRight: "0.1em"}}>
          <Button
            fullWidth
            variant="contained"
            onClick={props.handleSubmit}
            sx={{ mt: 3, mb: 2 }}
            >
            Sign In
          </Button>
        </Grid>
        <Grid item xs sx={{ paddingLeft: "0.1em"}}>
          <Button
            type="cancel"
            fullWidth
            variant="contained"
            onClick={props.handleClose}
            sx={{ mt: 3, mb: 2 }}
            >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

ControlSection.propTypes = {
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func
};

export { ControlSection };