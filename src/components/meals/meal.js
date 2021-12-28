import React from "react";
import styled from "styled-components";

const defaultImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fz%2FQ%2FY%2FG%2Fb%2Fg%2Fsandwich-half-md.png&f=1&nofb=1';

const StyledMeal = styled.div`
    max-width: 100%;
    width:10%;
    padding: 1%;
    background-color:#FECA70;
    img{
        width: 100%;
    }
    text-align: center;
    border: 2px solid black;

    :hover{
        cursor: pointer;
    }    
`

const Meal = (props) => {
    const { meal } = props;
    return (
        <StyledMeal>
            <img src={meal.image ? meal.image : defaultImage} alt={meal.name}/>
            <h4>{meal.name}</h4>
        </StyledMeal>
    );
};

export default Meal;