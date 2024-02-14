import styled, { keyframes } from "styled-components";

const ErrorBoxWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    margin-top: 3em;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const ErrorBoxContent = styled.div`
    display: inline-block;
    padding: 0 0.5em;
    width: 90%;
    background: white;
    border: 0.2em solid #e60000;
    border-radius: 1em;
`;

const fadein = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;

const ErrorBox = styled.div`
    display: inline-block;
    padding: 1em;
    width: 90%;
    color: red;
    margin: 0.5em 0;
    animation: ${fadein} 2s;
`;

export {ErrorBoxWrapper, ErrorBoxContent, ErrorBox};
