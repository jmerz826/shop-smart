import {
    ADD_LIST_TO_LISTS,
    ADD_ITEM_TO_PANTRY,
    REMOVE_ITEM_FROM_PANTRY,
    REMOVE_LIST_FROM_LISTS,
    REMOVE_ITEM_FROM_CURRENT_LIST,
    ADD_ITEM_TO_CURRENT_LIST,
    CLEAR_CURRENT_LIST,
    UPDATE_TOTAL,
    CLEAR_TOTAL,
    ADD_MEAL,
    DELETE_MEAL,
    POPULATE_CURRENT_LIST,
    EDIT_OLD_LIST
} from "../actions";

import { mealsData } from "../components/data/mealsData";

const initialState = {
    previousLists: [],
    pantryItems: ['bread', 'butter', 'eggs', 'milk'],
    currentListItems: [],
    listTotal: 0,
    meals: mealsData
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_TO_LISTS:
            if (state.previousLists) {
                return ({
                    ...state,
                    previousLists: [...state.previousLists, action.payload]
                });
            } else {
                return ({
                    ...state,
                    previousLists: [action.payload]
                });
            };
        case ADD_ITEM_TO_PANTRY:
            if (state.pantryItems) {
                return ({
                    ...state,
                    pantryItems: [...state.pantryItems, action.payload]
                });
            } else {
                return ({
                    ...state,
                    pantryItems: [action.payload]
                });
            };
        case REMOVE_ITEM_FROM_PANTRY:
            return ({
                ...state,
                pantryItems: state.pantryItems.filter(el => el !== action.payload)
            });
        case REMOVE_LIST_FROM_LISTS:
            return ({
                ...state,
                previousLists: state.previousLists.filter(el => el !== action.payload)
            });
        case REMOVE_ITEM_FROM_CURRENT_LIST:
            return ({
                ...state,
                currentListItems: state.currentListItems.filter(el => el !== action.payload)
            });
        case ADD_ITEM_TO_CURRENT_LIST:
            if (state.currentListItems) {
                return ({
                    ...state,
                    currentListItems: [...state.currentListItems, action.payload]
                });
            } else {
                return ({
                    ...state,
                    currentListItems: [action.payload]
                });
            };
        case CLEAR_CURRENT_LIST:
            return ({
                ...state,
               currentListItems: [] 
            });
        case UPDATE_TOTAL:
            return ({
                ...state,
                listTotal: action.payload
            });
        case CLEAR_TOTAL:
            return ({
                ...state,
                listTotal: 0
            });
        case ADD_MEAL:
            return ({
                ...state,
                meals: [...state.meals, action.payload]
            });
        case DELETE_MEAL: 
            return ({
                ...state,
                meals: state.meals.filter(meal => meal !== action.payload)
            });
        case POPULATE_CURRENT_LIST:
            const ingredientsToAdd = [];
            if (action.payload.ingredients) {
                action.payload.ingredients.forEach(ing => {
                    if (!state.currentListItems.find(i => i.item === ing)) {
                        ingredientsToAdd.push({ item: ing, price: '' });
                    };
                });
            } else {
                action.payload.forEach(ing => {
                    if (!state?.currentListItems || !state.currentListItems.find(i => i.item === ing)) {
                        ingredientsToAdd.push({ item: ing, price: '' });
                    };
                });
            }
            return ({
                ...state,
                currentListItems: [...state.currentListItems, ...ingredientsToAdd]
            });
        case EDIT_OLD_LIST:
            return ({
                ...state,
                previousLists: [...state.previousLists, action.payload]
            });
        default:
            return state
    }
}

export default reducer;