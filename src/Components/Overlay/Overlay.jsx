import React from "react";
import Overlay from "./Overlay.styled";
import PropTypes from 'prop-types';

function LBCOverlay(props) {
    return (
        <Overlay {...props}/>
    );
}

LBCOverlay.propTypes= {
    /**
     * The id(s) of the element(s) that describe the dialog.
     */
    'aria-describedby': PropTypes.string,
    /**
     * The id(s) of the element(s) that label the dialog.
     */
    'aria-labelledby': PropTypes.string,
    /**
     * A backdrop component. This prop enables custom backdrop rendering.
     * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
     * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
     * @default styled(Backdrop, {
     *   name: 'MuiModal',
     *   slot: 'Backdrop',
     *   overridesResolver: (props, styles) => {
     *     return styles.backdrop;
     *   },
     * })({
     *   zIndex: -1,
     * })
     */
    BackdropComponent: PropTypes.elementType,
    /**
     * @ignore
     */
    BackdropProps: PropTypes.object,
    /**
     * Dialog children, usually the included sub-components.
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
     * If `true`, hitting escape will not fire the `onClose` callback.
     * @default false
     */
    disableEscapeKeyDown: PropTypes.bool,
    /**
     * If `true`, the dialog is full-screen.
     * @default false
     */
    fullScreen: PropTypes.bool,
    /**
     * If `true`, the dialog stretches to `maxWidth`.
     *
     * Notice that the dialog width grow is limited by the default margin.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * Determine the max-width of the dialog.
     * The dialog width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     * @default 'sm'
     */
    maxWidth: PropTypes.oneOfType([
      PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
      PropTypes.string,
    ]),
    /**
     * Callback fired when the backdrop is clicked.
     * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
     */
    onBackdropClick: PropTypes.func,
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    onClose: PropTypes.func,
    /**
     * If `true`, the component is shown.
     */
    open: PropTypes.bool.isRequired,
    /**
     * The component used to render the body of the dialog.
     * @default Paper
     */
    PaperComponent: PropTypes.elementType,
    /**
     * Props applied to the [`Paper`](/material-ui/api/paper/) element.
     * @default {}
     */
    PaperProps: PropTypes.object,
    /**
     * Determine the container for scrolling the dialog.
     * @default 'paper'
     */
    scroll: PropTypes.oneOf(['body', 'paper']),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Fade
     */
    TransitionComponent: PropTypes.elementType,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        appear: PropTypes.number,
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
    ]),
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps: PropTypes.object,
};  

export default LBCOverlay;
