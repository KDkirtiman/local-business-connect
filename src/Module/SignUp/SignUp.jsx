import React, { useState } from "react";
import LBCOverlay from "../../Components/Overlay/Overlay";
import { AuthBtnWrapper, AuthenticateButton, PasswordDiv, UserNameDiv } from "../Login/Login.styled";
import LBCLabel from "../../Components/Label/Label";
import LBCTextField from "../../Components/TextField/TextField";
import LBCCONSTANT from "../../Constants/Constant";
import { LBCErrorBox } from "../../Components/ErrorBox/ErrorBox";
import { registerUserCredentials } from "../../ApiRequest/Registration/Registration";

function SignUp(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [displayErrorPopup, setDisplayErrorPopup] = useState(false);

    const onChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const closeErrorPopUp = () => {
        setDisplayErrorPopup(false);
    }

    const handleRegister = async () => {
        if (!userName || userName.length < 1) {
            setErrorMsg(LBCCONSTANT.usernameEmptyError)
            setDisplayErrorPopup(true);
        } else if (!password || password.length <1) {
            setErrorMsg(LBCCONSTANT.passwordEmptyError)
            setDisplayErrorPopup(true);
        } else if (!confirmPassword || confirmPassword !== password ) {
            setErrorMsg(LBCCONSTANT.passwordVerifyError)
            setDisplayErrorPopup(true);
        } else {
            const response = await registerUserCredentials({userName, password});
            if (!response || !response.transactionSuccess || response.error) {
                setErrorMsg(response.error.message);
                setDisplayErrorPopup(true);
            } else {
                setErrorMsg(LBCCONSTANT.credentialRegistrationSuccessful);
                setDisplayErrorPopup(true);
            }
        }
        console.log("Register new user");
    }

    return (
        <>
            <LBCOverlay {...props}>
                { displayErrorPopup && <LBCErrorBox errorMsg={errorMsg} onClose={closeErrorPopUp} /> }
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
                        placeholder={"Enter New Password"} 
                        value={password} 
                        onChange={onChangePassword}
                    />
                </PasswordDiv>
                <PasswordDiv>
                    <LBCLabel className={`label-div`}>Confirm Password</LBCLabel> :
                    <LBCTextField
                        inputClassName={`textfield-input`} 
                        className={`textfield-main`} 
                        type={"password"} 
                        placeholder={"Confirm Password"} 
                        value={confirmPassword} 
                        onChange={onChangeConfirmPassword}
                    />
                </PasswordDiv>
                <AuthBtnWrapper>
                    <AuthenticateButton label={"Register"} onClick={handleRegister}/>
                </AuthBtnWrapper>
            </LBCOverlay>
        </>
    );
}

export {SignUp}
