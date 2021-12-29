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
        font-style: inherit;
        font-size: 1.44rem;
    }

    .hidden{
        display:none;
    }

    .home-meal-modal{
        :hover{
            cursor:default;
        }
        border-radius: 16px;
        background-color: #feca70;
        border: 4px solid black;
        position: absolute;
        z-index: 1;
        top: 0;
        margin-top: 6%;
        margin-right: 80%;
        padding: 1%;
        width: 30%;
        text-align: center;

        img{
            width:90%;
        }
        button{
            display:block;
            margin: auto;
            margin-top: 2%;
        }
        img, h5, a{
            margin-top: 1%;
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
        return (' ' + capitalizedArr.join(', '))
    };

    const toggleMealModal = (inputMeal) => {
        const modals = document.querySelectorAll('.home-meal-modal');
        const modalsArr = Array.from(modals);
        const targetModal = modalsArr.find(
            (el) => el.id === inputMeal.name
        );
        targetModal.classList.toggle('hidden');
    };

    return (
      <StyledHomeMeal>
        <div
          onClick={() => {
            toggleMealModal(meal);
          }}
        >
          <img src={meal.image ? meal.image : defaultImage} alt={meal.name} />
          <h4>{meal.name}</h4>
        </div>

        {/* normally hidden modal with meal details */}
        <div id={meal.name} className="home-meal-modal hidden">
            <h4>{meal.name}</h4>
            <img src={meal.image ? meal.image : defaultImage} alt={meal.name} />
            <h5>Ingredients:{ingredientListMaker(meal)}</h5>
            <h5>Preparation time: <span className="bold">~{meal.time} minutes</span></h5>
            <a href={meal.recipe} target={"_blank"} rel="noreferrer">Recipe 👨‍🍳</a>
            <button>Add meal to current list</button>    
            <button onClick={() => toggleMealModal(meal)}>Close Window</button>
        </div>
      </StyledHomeMeal>
    );
};

export default MealHome;