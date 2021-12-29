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
    margin-right:1%;

    .meals{
        overflow: scroll;
        overflow-x: hidden;
    }

    h3{
        margin-bottom:4%;
    }
`

const MealsHomeDisplay = (props) => {
    const { meals } = props;
    return (
        <StyledMealsHome>
            <h3>My Meals:</h3>
            <div className="meals">
                {meals && meals.map(meal => {
                    return (
                        <MealHome meal={meal} key={meal.name}/>
                    );
                })}
            </div>
        </StyledMealsHome>
    );
};

const mapStateToProps = (state) => {
    return ({
        meals: state.meals
    });
};

export default connect(mapStateToProps)(MealsHomeDisplay);