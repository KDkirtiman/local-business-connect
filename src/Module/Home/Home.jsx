import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import LBCLabel from "../../Components/Label/Label";
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCButton from "../../Components/Button/Button";
import LBCHeading from "../../Components/Heading/Heading";
import LBCTextField from "../../Components/TextField/TextField";
import LBCTextArea from "../../Components/TextArea/TextArea";


const HomePage = () => {

    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayTextFIeld, setDisplayTextField] = useState('');
    const [displayTextArea, setDisplayTextArea] = useState('');

    const handleLogin = (value) => {
        setDisplayLogin(true);
    }

    const onOverlayClose = (value) => {
        setDisplayLogin(false);
    }

    const onTextFieldChange = (event) => {
        setDisplayTextField(event.target.value);
    }

    const onTextAreaChange = (event) => {
        console.log(event.target.value);
        setDisplayTextArea(event.target.value);
    }
    
    return (
        <LBCCard>
            <LBCHeading variant={'h6'} style={{textAlign: "left"}}>
                Welcome to the Local Business Connect.
            </LBCHeading>
            <LBCLabel style={{textAlign: "left"}}>
                Welcome to the Label Component.
            </LBCLabel>
            <div>
                <LBCTextArea onChange={onTextAreaChange}/>
            </div>
            <LBCButton label={"Home"} variant={"outlined"} color={"primary"} onClick={(event)=>handleLogin(event)}>
                Go To Home
            </LBCButton>
            {displayLogin &&
                <LBCOverlay
                    open={displayLogin}
                    onClose={onOverlayClose}
                    title={'Login'}
                    class_name_overlay={'overlay-main'}
                    class_name_overlay_title={'overlay-title'}
                    style_overlay_title={{fontSize: '2em'}}
                >
                    <div>
                    <LBCLabel style={{textAlign: "left"}} >
                        UserName : 
                    </LBCLabel>
                    <LBCTextField placeholder={'User Name !!!'} value={displayTextFIeld} onChange={onTextFieldChange}/>
                    </div>
                </LBCOverlay>
            }
        </LBCCard>
    );
}

export default HomePage;
