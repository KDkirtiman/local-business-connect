import React from "react";
import { ErrorBox, ErrorBoxContent, ErrorBoxWrapper } from "./ErrorBox.styled";

function LBCErrorBox(props) {
    
    const onClickOutside = (value) => {
        if(value.target.id === 'error_box_wrapper') {
            props.onClose(value);
        }
    }

    return (
        <>
            <ErrorBoxWrapper id="error_box_wrapper" onClick={onClickOutside}>
                <ErrorBoxContent id="error_box_content">
                    <span className="overlay-close" onClick={(event)=>props.onClose(event)}>&times;</span>
                    <ErrorBox id="error_box" style={props.styleErrorBox} className={props.classNameErrorBox}>
                        {props.errorMsg}
                    </ErrorBox>
                </ErrorBoxContent>
            </ErrorBoxWrapper>
        </>
    );
}

export {LBCErrorBox};
