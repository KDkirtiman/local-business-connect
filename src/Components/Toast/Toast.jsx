import PropTypes from 'prop-types';
import { Alert, Snackbar } from "@mui/material";

function Toast(props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      {...props}
    >
      <Alert
        onClose={props.onClose}
        severity={props.type}
        variant={props.variant}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}

Toast.propTypes = {
  open: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  message: PropTypes.string
};

export {Toast};
