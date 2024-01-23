import React, { useState } from "react";
import LBCCard from "../../Components/Card/Card";
import LBCLabel from "../../Components/Label/Label";
import LBCOverlay from "../../Components/Overlay/Overlay";

export const HomePage = () => {

    const [displayLogin, setDisplayLogin] = useState(false);

    return (
        <LBCCard>
            <LBCLabel variant={"h4"} align={"left"}>
                Welcome to the Local Business Connect.
            </LBCLabel>
            <LBCOverlay open={displayLogin}/>
        </LBCCard>
    );
}