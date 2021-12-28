import React from "react";
import { connect } from 'react-redux';
import Meal from "./meal";
import styled from "styled-components";
import { addMeal } from "../../actions";

const StyledMeals = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2%;
`

const StyledMealForm = styled.form`

`

const initialFormValues = {
    name: '',
    ingredient: '',
    ingredients: [],
    image: '',
    time: '',
    recipe: ''
}

class Meals extends React.Component {
    state = {
        meals: this.props.meals,
        formValues: initialFormValues
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        });
    };

    handleAddIngredient = (e) => {
        e.preventDefault();

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newMeal = {
            name: this.state.formValues.name,
            ingredient: this.state.formValues.ingredient,
            ingredients: this.state.formValues.ingredients,
            image: this.state.formValues.image,
            time: this.state.formValues.time,
            recipe: this.state.formValues.recipe
        };
        this.props.addMeal(newMeal);
        this.setState({
            ...this.state,
            formValues: initialFormValues
        });
    }

    render() {
        return (
            <div>
                <StyledMealForm>
                    <h3>Add a meal:</h3>
                    <label> Meal name: 
                    <input
                        name='name'
                        type='text'
                        value={this.state.formValues.name}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label> Ingredient: 
                    <input
                        name='ingredient'
                        type='text'
                        value={this.state.formValues.ingredient}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label> Image URL: 
                    <input
                        name='image'
                        type='text'
                        value={this.state.formValues.image}
                        onChange={this.handleChange}
                        placeholder="(optional)"
                        />
                    </label>
                    <label> Preparation + cook time (approx.): 
                    <input
                        name='time'
                        type='number'
                        value={this.state.formValues.time}
                        onChange={this.handleChange}
                        placeholder="(optional)"
                        />
                    </label>
                    <label> Link to recipe: 
                    <input
                        name='recipe'
                        type='text'
                        value={this.state.formValues.recipe}
                        onChange={this.handleChange}
                        placeholder="(optional)"
                        />
                    </label>
                </StyledMealForm>
                
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
        meals: state.meals
    })
}

export default connect(mapStateToProps, {addMeal})(Meals);