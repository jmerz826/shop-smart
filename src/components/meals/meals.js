import React from "react";
import { connect } from 'react-redux';
import Meal from "./meal";
import styled from "styled-components";
import { addMeal } from "../../actions";

const StyledMeals = styled.div`
    margin:2% 4%;
    background-color:yellow;
    border-radius: 16px;
    border: 2px solid black;
    padding: 0.5%;

    .meals{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 2% 4%;
    }

    h3{
        text-align: center;
    }
`

const StyledMealForm = styled.form`
    display:flex;
    flex-direction: column;
    width: 36%;
    align-items: left;
    margin: auto;
    background-color: beige;
    margin-top: 1%;
    border-radius: 16px;
    padding:0.5%;
    text-align: center;
    box-sizing: border-box;

    h5{
        margin: 1% 0;
        text-decoration: underline;
    }

    input{
        display:inline-block;
        width:60%;
        margin: auto;
        text-align: center;
        margin-bottom: 1%;
    }

    /* Removes default arrows on number input(s) (prep time input) */
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button{
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        margin:0;
    }
    button{
        margin: auto;
        margin-bottom:1%;
    }

    li{
        text-transform: capitalize;
    }

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
        formValues: initialFormValues,
    };

    componentDidUpdate(prevState) {
        if (prevState.meals !== this.props.meals) {
            this.setState({
                ...this.state,
                meals: this.props.meals
            })
        }
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
        const newIngredient = this.state.formValues.ingredient;
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                ingredients: [...this.state.formValues.ingredients, newIngredient],
                ingredient: ''
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newMeal = {
            name: this.state.formValues.name,
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

                    <label> Meal name:</label>
                        <input
                            name='name'
                            type='text'
                            value={this.state.formValues.name}
                            onChange={this.handleChange}
                        />
                    
                    <label> Ingredient:</label>
                        <input
                            name='ingredient'
                            type='text'
                            value={this.state.formValues.ingredient}
                            onChange={this.handleChange}
                        />
                    
                    <button onClick={this.handleAddIngredient}>Add ingredient</button>
                    
                    <label> Preparation + cook time (approx.):</label> 
                        <input
                            name='time'
                            type='number'
                            value={this.state.formValues.time}
                            onChange={this.handleChange}
                            placeholder="(optional)"
                        />
                    
                    
                    <label> Link to recipe:</label> 
                    <input
                        name='recipe'
                        type='text'
                        value={this.state.formValues.recipe}
                        onChange={this.handleChange}
                        placeholder="(optional)"
                    />

                    <label> Image URL:</label> 
                        <input
                            name='image'
                            type='text'
                            value={this.state.formValues.image}
                            onChange={this.handleChange}
                            placeholder="(optional)"
                        />
                                        
                    <button onClick={this.handleSubmit}>Add meal!</button>

                    <div>
                        {this.state.formValues.ingredients.length >= 1 ? <h5>Added Ingredients:</h5> : ''}
                        {this.state.formValues.ingredients && this.state.formValues.ingredients.map(i => {
                            return (
                                <li key={i}>{i}</li>
                            );
                        })}
                    </div>
                    </StyledMealForm>

                
                <StyledMeals>
                    <h3>My Meals:</h3>
                    <div className="meals">
                        {this.state.meals && this.state.meals.map(meal => {
                            return (
                                <Meal meal={meal} key={meal.name}/>
                            )
                        })}
                    </div>
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