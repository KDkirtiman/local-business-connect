import React from "react";
import PropTypes from 'prop-types';
import BtnButton from "./Button.styled";


function LBCButton(props) {
    return (
        <BtnButton {...props}/>
    );
}

LBCButton.propTypes = {
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
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     * @default 'primary'
     */
    color: PropTypes.oneOfType([
      PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
      PropTypes.string,
    ]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation: PropTypes.bool,
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: PropTypes.bool,
    /**
     * Element placed after the children.
     */
    endIcon: PropTypes.node,
    /**
     * @ignore
     */
    focusVisibleClassName: PropTypes.string,
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large']),
      PropTypes.string,
    ]),
    /**
     * Element placed before the children.
     */
    startIcon: PropTypes.node,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * @ignore
     */
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: PropTypes.oneOfType([
      PropTypes.oneOf(['contained', 'outlined', 'text']),
      PropTypes.string,
    ]),
};

export default LBCButton;
