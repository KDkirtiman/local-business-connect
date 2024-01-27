import React from "react";
import Overlay from "./Overlay.styled";
import PropTypes from 'prop-types';
import './Overlay.css';

function LBCOverlay(props) {

  const onClickOutside = (value) => {
    if(value.target.id === 'overlay_main_div') {
        props.onClose(value);
    }
  }

  return (
    <Overlay id='overlay_main_div' {...props} onClick={onClickOutside}>
      <div style={props.styleOverlay} className={`${props.classNameOverlay} overlay-content`}>
        <span className="overlay-close" onClick={(event)=>props.onClose(event)}>&times;</span>
        <div id='overlay_title' style={props.styleOverlayTitle} className={`${props.classNameOverlayTitle} overlay_title` }>
          {props.title}
        </div>
        {props.children}
      </div>
    </Overlay>
  );
}

LBCOverlay.propTypes= {
  /**
  * Boolean value to display the Overlay Component
  */
  open: PropTypes.bool,
  /**
  * Callback function called when the Overlay is closed.
  */
  onClose: PropTypes.func,
  /**
  * Provides the Title to the Overlay Component.
  */
  title: PropTypes.string,
  /**
  * Override or extend the styles applied to the Overlay Content Div.
  */
  classNameOverlay: PropTypes.string,
  /**
  * extend the styles applied to the Overlay Title Div.
  */
  classNameOverlayTitle: PropTypes.string,
  /**
  * Override the styles applied to the Overlay Title Div.
  */
  styleOverlayTitle: PropTypes.object,
  /**
  * Override the styles applied to the Overlay Content Div.
  */
  styleOverlay: PropTypes.object,
};  

export default LBCOverlay;
