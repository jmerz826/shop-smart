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
            <h3>⚠️THIS SITE IS A WORK IN PROGRESS⚠️</h3>
            <h4>Site created exclusively by John Merz</h4>
        </StyledFooter>
    );
};

export default Footer;
