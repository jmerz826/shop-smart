import React from "react";
import { connect } from 'react-redux';
import Meal from "./meal";
import styled from "styled-components";

const StyledMeals = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2%;
`

class Meals extends React.Component {
    state = {
        meals: this.props.meals
    };

    render() {
        return (
            <div>
                <h3>My Meals:</h3>
                <StyledMeals>
                    {this.state.meals && this.state.meals.map(meal => {
                        return (
                            <Meal meal={meal} key={meal.name}/>
                        )
                    })}
                </StyledMeals>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        meals: state.state.meals
    })
}

export default connect(mapStateToProps)(Meals);