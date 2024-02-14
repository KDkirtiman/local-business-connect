import React, { useState } from "react";
import './Login.style.css';
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCLabel from "../../Components/Label/Label";
import LBCTextField from "../../Components/TextField/TextField";
import { AuthBtnWrapper, AuthenticateButton, PasswordDiv, Span, SpanWrapper, UserNameDiv } from "./Login.styled";
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
        const response = await authenticateUser({userName, password});
        console.log("User : {} is logged in",response);
        if (!response || !response.transactionSuccess || response.error) {
            setDisplayErrorPopup(true);
        } else {
            navigate("/dashboard");
        }
    }

    const  closeErrorPopUp = () => {
        setDisplayErrorPopup(false);
    }

    const handleForgetButtonClick = () => {
        navigate("/forgetCredential")
    }

    const handleNewUserClick = () => {
        props.handleNewUserClick();
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
                <SpanWrapper>
                    <Span onClick={handleForgetButtonClick}>Forget Username/Password</Span>
                </SpanWrapper>
                <SpanWrapper>
                    <Span onClick={handleNewUserClick}>Are you New User? SignUp</Span>
                </SpanWrapper>
            </LBCOverlay>
        </>
    );
}

export { LoginOverlay };
