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
      <div className="overlay-content">
        <span className="overlay-close" onClick={(event)=>props.onClose(event)}>&times;</span>
        <div id='overlay_title' className="overlay_title">
          {props.title}
        </div>
        {props.children}
      </div>
    </Overlay>
  );
}

LBCOverlay.propTypes= {
};  

export default LBCOverlay;
