import styled from "styled-components";
import LBCButton from "../../Components/Button/Button";

const UserNameDiv = styled.div`
    display: flex;
    margin-bottom: 0.5em;
`;

const PasswordDiv = styled.div`
    display: flex;
    margin-bottom: 0.5em;
`;

const AuthenticateButton = styled(LBCButton)`
    width: 90%;
    font-size: 1.3em;
    font-family: cursive;
    font-weight: 700;
    background: transparent;
    border: 0.1em solid;
    border-radius: 0.6em;
    margin-top: 0.5em;
    color: floralwhite;
    
    $:hover {
        color: #275561;
        background-color: #fff;
        border: 0.1em solid #abd6d8;
        text-decoration: none;
        cursor: pointer;
    }
`;

const AuthBtnWrapper = styled.div`

    &:hover ${AuthenticateButton} {
        color: #275561;
        background-color: #fff;
        border: 0.1em solid #abd6d8;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Span = styled.span`
    color: #fff;

    &:hover {
        color: #4db8ff;
        cursor: pointer;
        text-decoration: underline;
    }
`;

const SpanWrapper = styled.div`
    margin: 0.2em;

`;

export {UserNameDiv, PasswordDiv, AuthenticateButton, AuthBtnWrapper, Span, SpanWrapper};
