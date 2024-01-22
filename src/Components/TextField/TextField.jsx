import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { refType } from '@mui/utils';
import { TextField } from '@mui/material';

const Textfield = styled(TextField)`
padding: 10px;
`;

function LBCTextField(props) {
    return (
        <Textfield multiline={false} {...props}/>
    )
}

LBCTextField.propTypes = {
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete: PropTypes.string,
    /**
     * If `true`, the `input` element is focused during the first mount.
     * @default false
     */
    autoFocus: PropTypes.bool,
    /**
     * @ignore
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
      PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
      PropTypes.string,
    ]),
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue: PropTypes.any,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, the label is displayed in an error state.
     * @default false
     */
    error: PropTypes.bool,
    /**
     * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
     */
    FormHelperTextProps: PropTypes.object,
    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * The helper text content.
     */
    helperText: PropTypes.node,
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id: PropTypes.string,
    /**
     * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
     * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
     */
    InputLabelProps: PropTypes.object,
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps: PropTypes.object,
    /**
     * Props applied to the Input element.
     * It will be a [`FilledInput`](/material-ui/api/filled-input/),
     * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
     * component depending on the `variant` prop value.
     */
    InputProps: PropTypes.object,
    /**
     * Pass a ref to the `input` element.
     */
    inputRef: refType,
    /**
     * The label content.
     */
    label: PropTypes.node,
    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     * @default 'none'
     */
    margin: PropTypes.oneOf(['dense', 'none', 'normal']),
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * If `true`, a `textarea` element is rendered instead of an input.
     * @default false
     */
    multiline: PropTypes.bool,
    /**
     * Name attribute of the `input` element.
     */
    name: PropTypes.string,
    /**
     * @ignore
     */
    onBlur: PropTypes.func,
    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange: PropTypes.func,
    /**
     * @ignore
     */
    onFocus: PropTypes.func,
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder: PropTypes.string,
    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required: PropTypes.bool,
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
     * If this option is set you must pass the options of the select as children.
     * @default false
     */
    select: PropTypes.bool,
    /**
     * Props applied to the [`Select`](/material-ui/api/select/) element.
     */
    SelectProps: PropTypes.object,
    /**
     * The size of the component.
     */
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['medium', 'small']),
      PropTypes.string,
    ]),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     */
    type: PropTypes.string,
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value: PropTypes.any,
    /**
     * The variant to use.
     * @default 'outlined'
     */
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

export default LBCTextField;
