import React from "react";
import PropTypes from 'prop-types';
import BtnButton from "./Button.styled";


function LBCButton(props) {
    return (
      <BtnButton
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        type={props.variant}
      >
        {props.label}
      </BtnButton>
    );
}

LBCButton.propTypes = {
  /**
   * The label for the button.
   */
  label: PropTypes.string,
  /**
   * The variant of the button component.
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
  /**
   * Callback function whenever the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Override the styles applied to the component.
   */
  style: PropTypes.object,
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
};

export default LBCButton;
