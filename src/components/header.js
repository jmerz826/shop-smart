import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    background-color: #FECA70;
    padding:1%;
    border-bottom: 2px groove black;

    h2{
        width:25%;
        font-size:3rem;
    }

    nav{
        display:flex;
        width:50%;
        justify-content:space-between;
        align-items:center;
    }

    a{
        text-decoration:none;
        border: 1px solid black;
        padding:2%;
        border-radius:12px;
        background-color:limegreen;
        color:white;
    }

    a:hover{
        background-color:#4AA3FC;
    }

    .green{
        color:limegreen;
    }
    .blue{
        color:#4AA3FC;
    }
`

const Header = (props) => {
    return (
        <StyledHeader>
            <h2><span className="green">Shop</span><span className="blue">Smart</span></h2>
            <nav>
                <Link to='/'>My Lists</Link>
                <Link to='/meals'>My Meals</Link>
                <Link to='/pantry'>My Pantry</Link>
                <Link to='/calendar'>My Calendar</Link>
                <Link to='/shop'>Shop!</Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;