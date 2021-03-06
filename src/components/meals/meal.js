import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { deleteMeal } from "../../actions";

const defaultImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fz%2FQ%2FY%2FG%2Fb%2Fg%2Fsandwich-half-md.png&f=1&nofb=1';

const StyledMeal = styled.div`
    max-width: 100%;
    width:12.5%;
    padding: 1%;
    background-color:#FECA70;
    display:flex;
    justify-content:center;
    align-items:baseline;
    margin: 0 2% 2% 2%;
    img{
        width: 100%;
    }
    text-align: center;
    border: 2px solid black;

    #card-title{
        text-transform: capitalize;
    }

    :hover{
        cursor: pointer;
    }    

    .hidden{
        display:none;
    }

    .meal-modal{
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
        .buttons{
            display:flex;
            width:50%;
            margin:auto;
            margin-top: 1%;

            button{
                font-size: 1rem;
            }
        }
        .delete-btn{
            background-color:#FF2400;
        }
    }
`

const Meal = (props) => {
    const { meal } = props;

    const ingredientListMaker = (meal) => {
        const capitalizedArr = meal.ingredients.map(ing => {
            return (ing[0].toUpperCase() + ing.slice(1));
        })
        return (' ' + capitalizedArr.join(', '))
    };

    const toggleMealModal = (inputMeal) => {
        const modals = document.querySelectorAll('.meal-modal');
        const modalsArr = Array.from(modals);
        const targetModal = modalsArr.find(
            (el) => el.id === inputMeal.name
        );
        targetModal.classList.toggle('hidden');
    };

    const handleDelete = (meal) => {
        props.deleteMeal(meal);
    }

    return (
        <StyledMeal>
            <div onClick={() => toggleMealModal(meal)}>
                <img src={meal.image ? meal.image : defaultImage} alt={meal.name}/>
                <h4 id='card-title'>{meal.name}</h4>
            </div>

            <div id={meal.name} className="meal-modal hidden">
                <h4>{meal.name}</h4>
                <img src={meal.image ? meal.image : defaultImage} alt={meal.name} />
                <h5>Ingredients:{ingredientListMaker(meal)}</h5>
                {meal.time && <h5>Preparation time: <span className="bold">~{meal.time} minutes</span></h5>}
                {meal.recipe && <a href={meal.recipe} target={"_blank"} rel="noreferrer">Recipe ???????????</a>}
                <div className="buttons">
                    <button className="delete-btn" onClick={() => handleDelete(meal)}>Delete Meal</button>
                    <button onClick={() => toggleMealModal(meal)}>Close Window</button>
                </div>
            </div>
        </StyledMeal>
    );
};

const mapStateToProps = state => {
    return ({
        state
    });
};

export default connect(mapStateToProps, {deleteMeal})(Meal);