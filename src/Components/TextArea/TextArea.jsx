import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea.styled';

function LBCTextArea(props) {
    return (
        <TextArea
          style={props.style}
          className={props.className}
          onChange={props.onChange}
          placeholder={props.placeholder ? props.placeholder : 'Input Value'}
          value={props.value}
        />
    )
}

LBCTextArea.propTypes = {
  /**
   * The placeholder value of the component.
   */
  placeholder: PropTypes.string,
  /**
   * The value to be displayed inside the input component.
   */
  value: PropTypes.string,
  /**
   * Callback function whenever the value changes.
   */
  onChange: PropTypes.func,
  /**
   * Override the styles applied to the component.
   */
  style: PropTypes.object,
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
};

export default LBCTextArea;
