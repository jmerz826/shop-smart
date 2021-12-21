import React from "react";
import Meals from "./meals";
import styled from "styled-components";

const StyledMealsHome = styled.div`
    width:25%;
    height:100%;
    
`

const MealsHomeDisplay = (props) => {
    return (
        <StyledMealsHome>
            <Meals />
            <p>feature coming soon.</p>
        </StyledMealsHome>
    );
};

export default MealsHomeDisplay;