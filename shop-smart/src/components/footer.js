import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color:black;
    color:white;
    position:absolute;
    bottom:0;
    width:100%;
    display:flex;
    flex-direction:column;
    padding:1% 0;
    align-items:center;
`

const Footer = (props) => {
    return (
        <StyledFooter>
            <h5>⚠️THIS SITE IS A WORK IN PROGRESS⚠️</h5>
            <h5>Site created exclusively by John Merz, who is learning in public 😄</h5>
        </StyledFooter>
    );
};

export default Footer;
