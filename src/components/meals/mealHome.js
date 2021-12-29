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

    .bold{
        font-weight: bold;
    }

    a{
        text-decoration: none;
        color: inherit;
        font-style: inherit;
    }

    .hidden{
        /* display:none; */
    }

    .home-meal-modal{
        border-radius: 16px;
        background-color: #feca70;
        border: 4px solid black;
        position: absolute;
        z-index: 1;
        top: 0;
        margin-top: 6%;
        margin-right: 80%;
        padding: 1%;
        width: 50%;
        text-align: center;

        img{
            width:90%;
        }
    }
`

const MealHome = props => {
    const { meal } = props;
    console.log(meal);

    const ingredientListMaker = (meal) => {
        const capitalizedArr = meal.ingredients.map(ing => {
            return (ing[0].toUpperCase() + ing.slice(1));
        })
        return capitalizedArr.join(', ')
    }

    return (
        <StyledHomeMeal>
            <img src={meal.image ? meal.image : defaultImage} alt={meal.name}/>
            <h4>{meal.name}</h4>

            {/* normally hidden modal with meal details */}
            <div className="home-meal-modal hidden">
                <h4>{meal.name}</h4>
                <img src={meal.image ? meal.image : defaultImage} alt={meal.name} />
                <h5>Ingredients:
                    {/* {meal.ingredients.map(ing => {
                    return (
                        <li key={ing + meal.name}>{ing}</li>
                    );
                    })} */}
                    {ingredientListMaker(meal)}
                </h5>

                <h5>Preparation time: <span className="bold">~{meal.time} minutes</span></h5>
                <a href={meal.recipe} target={'_blank'} rel='noreferrer'>Recipe 👨‍🍳</a>
            </div>
        </StyledHomeMeal>
    );
};

export default MealHome;