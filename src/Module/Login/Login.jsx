import React, { useState } from "react";
import './Login.style.css';
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCLabel from "../../Components/Label/Label";
import LBCTextField from "../../Components/TextField/TextField";
import { AuthBtnWrapper, AuthenticateButton, PasswordDiv, UserNameDiv } from "./Login.styled";
import LBCButton from "../../Components/Button/Button";
import authenticateUser from "../../ApiRequest/AuthenticateUser/AuthenticateUser";
import { useNavigate } from "react-router-dom";
import { LBCErrorBox } from "../../Components/ErrorBox/ErrorBox";
import LBCCONSTANT from "../../Constants/Constant";

function LoginOverlay (props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [displayErrorPopup, setDisplayErrorPopup] = useState(false);

    const onChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const response = await authenticateUser();
        console.log("User : {} is logged in",response);
        if (!response || !response.transactionSuccess || response.error) {
            setDisplayErrorPopup(true);
        } else {
            navigate("/practice");
        }
    }

    const  closeErrorPopUp = () => {
        setDisplayErrorPopup(false);
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
                <AuthBtnWrapper>
                    <AuthenticateButton label={"Authenticate"} onClick={handleLogin}/>
                </AuthBtnWrapper>
                { displayErrorPopup && <LBCErrorBox errorMsg={LBCCONSTANT.authenticateFailure} onClose={closeErrorPopUp} /> }
                <div>Forget Password</div>
                <div>Are you New User?</div>
            </LBCOverlay>
        </>
    );
}

export { LoginOverlay };
