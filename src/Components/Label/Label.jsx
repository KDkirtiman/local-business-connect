import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label.styled';
import './Label.style.css';

function LBCLabel ({variant='h1',...props}) {

  return (
    <Label {...props}>
      <span className={variant}>{props.children}</span>
    </Label>
  )
}

LBCLabel.propTypes = {
    /**
     * Set the text-align on the component.
     * @default 'inherit'
     */
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the text will have a bottom margin.
     * @default false
     */
    gutterBottom: PropTypes.bool,
    /**
     * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     *
     * Note that text overflow can only happen with block or inline-block level elements
     * (the element needs to have a width in order to overflow).
     * @default false
     */
    noWrap: PropTypes.bool,
    /**
     * If `true`, the element will be a paragraph element.
     * @default false
     */
    paragraph: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * Applies the theme typography styles.
     * @default 'body1'
     */
    variant: PropTypes/* @typescript-to-proptypes-ignore */.oneOfType([
      PropTypes.oneOf([
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ]),
      PropTypes.string,
    ]),
    /**
     * The component maps the variant prop to a range of different HTML element types.
     * For instance, subtitle1 to `<h6>`.
     * If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` prop.
     * @default {
     *   h1: 'h1',
     *   h2: 'h2',
     *   h3: 'h3',
     *   h4: 'h4',
     *   h5: 'h5',
     *   h6: 'h6',
     *   subtitle1: 'h6',
     *   subtitle2: 'h6',
     *   body1: 'p',
     *   body2: 'p',
     *   inherit: 'p',
     * }
     */
    variantMapping: PropTypes.object,
};

export default LBCLabel;
