import React from 'react';
import PropTypes from 'prop-types';
import Textfield from './TextField.styled';

function LBCTextField(props) {
  return (
    <div style={props.style} className={props.className}>
      <Textfield
        type={props.type ? props.type : 'text'}
        style={props.inputStyle}
        className={props.inputClassName}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      >
        {props.children}
      </Textfield>
    </div>
  )
}

LBCTextField.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
  /**
   * Override the styles applied to the input tag.
   */
  inputStyle: PropTypes.object,
  /**
   * Extend the styles applied to the input tag.
   */
  inputClassName: PropTypes.string,
};

export default LBCTextField;
