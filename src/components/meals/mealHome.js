import React from "react";
import styled from "styled-components";

const defaultImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fz%2FQ%2FY%2FG%2Fb%2Fg%2Fsandwich-half-md.png&f=1&nofb=1';

const StyledHomeMeal = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width: 100%;
    width:100%;
    padding: 1%;
    background-color:#FECA70;
    img{
        width: 90%;
        margin-top:1%;
    }
    text-align: center;
    border: 2px solid black;
    margin-bottom: 2%;
    :hover{
        cursor: pointer;
    } 
`

const MealHome = props => {
    const { meal } = props;
    return (
        <StyledHomeMeal>
            <img src={meal.image ? meal.image : defaultImage} alt={meal.name}/>
            <h4>{meal.name}</h4>
        </StyledHomeMeal>
    );
};

export default MealHome;