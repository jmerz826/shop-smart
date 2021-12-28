import React from "react";
import styled from "styled-components";

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
            <img src={meal.image} alt={meal.name}/>
            <h4>{meal.name}</h4>
        </StyledMeal>
    );
};

export default Meal;