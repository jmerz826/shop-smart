import React from "react";
import styled from "styled-components";

const StyledHomeMeal = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 100%;
    width:100%;
    padding: 1%;
    background-color:#FECA70;
    img{
        width: 100%;
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
            <img src={meal.image} alt={meal.name}/>
            <h4>{meal.name}</h4>
        </StyledHomeMeal>
    );
};

export default MealHome;