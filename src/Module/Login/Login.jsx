import React, { useState } from "react";
import './Login.style.css';
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCLabel from "../../Components/Label/Label";
import LBCTextField from "../../Components/TextField/TextField";
import { PasswordDiv, UserNameDiv } from "./Login.styled";

function LoginOverlay (props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
            <LBCOverlay {...props}>
                <UserNameDiv>
                    <LBCLabel className={`label-div`}>Username</LBCLabel> :
                    <LBCTextField
                        inputClassName={`textfield-input`} 
                        className={`textfield-main`} 
                        placeholder={"Enter Username"} 
                        value={userName} 
                        onChange={onChangeUserName}
                    />
                </UserNameDiv>
                <PasswordDiv>
                    <LBCLabel className={`label-div`}>Password</LBCLabel> :
                    <LBCTextField
                        inputClassName={`textfield-input`} 
                        className={`textfield-main`} 
                        type={"password"} 
                        placeholder={"Enter Password"} 
                        value={password} 
                        onChange={onChangePassword}
                    />
                </PasswordDiv>
                <div>
                    <div>Authenticate</div>
                    <div>Cancel</div>
                </div>
                <div>Are you New User?</div>
            </LBCOverlay>
        </>
    );
}

export { LoginOverlay };
