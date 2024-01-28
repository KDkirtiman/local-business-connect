import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label.styled';

function LBCLabel ({variant='h1',...props}) {

  return (
    <Label {...props} style={props.style} className={props.className}>
      {props.children}
    </Label>
  )
}

LBCLabel.propTypes = {
  /** The variant of the label
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override the styles applied to the component.
   */
  style: PropTypes.object,
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
};

export default LBCLabel;
