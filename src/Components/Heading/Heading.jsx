import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label.styled';
import './Heading.style.css';

function LBCHeading ({variant='h1',...props}) {

  return (
    <Label {...props} style={props.style}>
      <span className={`${variant} ${props.className}`}>{props.children}</span>
    </Label>
  )
}

LBCHeading.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * extend the styles applied to the Label Div.
     */
    className: PropTypes.string,
    /**
     * override the styles applied to the Label Div.
     */
    style: PropTypes.object,
    /**
     * Applies the theme span for Heading styles.
     * @default 'h1'
     */
    variant: PropTypes/* @typescript-to-proptypes-ignore */.oneOfType([
      PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ]),
      PropTypes.string,
    ]),
};

export default LBCHeading;
