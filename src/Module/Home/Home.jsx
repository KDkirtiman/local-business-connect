import React, { useState } from "react";
import LBCCard from "../../Components/Card/Card";
import LBCLabel from "../../Components/Label/Label";
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCButton from "../../Components/Button/Button";
import { DialogTitle } from "@mui/material";

const HomePage = () => {

    const [displayLogin, setDisplayLogin] = useState(false);

    const handleLogin = (value) => {
        setDisplayLogin(true);
    }

    const onOverlayClose = () => {
        setDisplayLogin(false);
    }
    
    return (
        <LBCCard>
            <LBCLabel variant={"h4"} align={"left"}>
                Welcome to the Local Business Connect.
            </LBCLabel>
            <LBCButton label={"Home"} variant={"outlined"} color={"primary"} onClick={handleLogin}>
                Go To Home
            </LBCButton>
            <LBCOverlay open={displayLogin} onClose={onOverlayClose}>
                <DialogTitle>
                    Login Please !!!
                </DialogTitle>
            </LBCOverlay>
        </LBCCard>
    );
}

export default HomePage;
