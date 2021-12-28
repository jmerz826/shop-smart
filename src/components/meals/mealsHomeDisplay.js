import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import MealHome from "./mealHome";

const StyledMealsHome = styled.div`
    width:25%;
    height:100%;
    text-align:center;
    display:flex;
    flex-direction: column;
    height:75vh;
    overflow: scroll;
    overflow-x: hidden;
    margin-right:1%;
    h3{
        margin-bottom:4%;
    }
`

const MealsHomeDisplay = (props) => {
    const { meals } = props;
    console.log(meals);
    return (
        <StyledMealsHome>
            <h3>Meals:</h3>
            {meals && meals.map(meal => {
                return (
                    <MealHome meal={meal} key={meal.name} />
                );
            })}
        </StyledMealsHome>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        meals: state.state.meals
    });
};

export default connect(mapStateToProps)(MealsHomeDisplay);