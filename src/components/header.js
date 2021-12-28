import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const StyledHeader = styled.div`
    display: flex;
    background-color: #FECA70;
    padding:1%;
    border-bottom: 2px groove black;

    h2{
        width:30%;
        font-size:3rem;
    }

    nav{
        display:flex;
        width:40%;
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

    .my-links{
        svg{
            margin: 0 1%;
        }
        a{
            background-color:transparent;
            color:black;
            border:none;
        }
        width:30%;
        font-size: 2rem;
        display:flex;
        align-items:center;
        justify-content:right;
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
                {/* <Link to='/calendar'>My Calendar</Link>
                <Link to='/shop'>Shop!</Link> */}
            </nav>
            <div className="my-links">
                <a href='https://www.linkedin.com/in/john-merz/' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com/jmerz826' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>

            </div>
        </StyledHeader>
    );
};

export default Header;