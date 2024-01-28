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
      <div style={props.style_overlay} className={`${props.class_name_overlay} overlay-content`}>
        <span className="overlay-close" onClick={(event)=>props.onClose(event)}>&times;</span>
        <div id='overlay_title' style={props.style_overlay_title} className={`${props.class_name_overlay_title} overlay_title` }>
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
   * The content of the component.
   */
  children: PropTypes.node,
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
  class_name_overlay: PropTypes.string,
  /**
  * extend the styles applied to the Overlay Title Div.
  */
  class_name_overlay_title: PropTypes.string,
  /**
  * Override the styles applied to the Overlay Title Div.
  */
  style_overlay_title: PropTypes.object,
  /**
  * Override the styles applied to the Overlay Content Div.
  */
  style_overlay: PropTypes.object,
};  

export default LBCOverlay;
