import styled from "styled-components";

const Overlay = styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
`;

export default Overlay;
