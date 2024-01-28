import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import LBCLabel from "../../Components/Label/Label";
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCButton from "../../Components/Button/Button";
import LBCHeading from "../../Components/Heading/Heading";


const HomePage = () => {

    const [displayLogin, setDisplayLogin] = useState(false);

    const handleLogin = (value) => {
        setDisplayLogin(true);
    }

    const onOverlayClose = (value) => {
        setDisplayLogin(false);
    }
    
    return (
        <LBCCard>
            <LBCHeading variant={'h6'} align={"left"}>
                Welcome to the Local Business Connect.
            </LBCHeading>
            <LBCLabel style={{textAlign: "left"}}>
                Welcome to the Label Component.
            </LBCLabel>
            <LBCButton label={"Home"} variant={"outlined"} color={"primary"} onClick={(event)=>handleLogin(event)}>
                Go To Home
            </LBCButton>
            {displayLogin &&
                <LBCOverlay
                    open={displayLogin}
                    onClose={onOverlayClose}
                    title={'Login'}
                    classNameOverlay={'classNameOverlay'}
                    classNameOverlayTitle={'classNameOverlayTitle'}
                    styleOverlayTitle={{fontSize: '2em'}}
                >
                    <LBCCard style={{backgroundColor: 'transparent'}}>
                        Login !!!
                    </LBCCard>
                </LBCOverlay>
            }
        </LBCCard>
    );
}

export default HomePage;
