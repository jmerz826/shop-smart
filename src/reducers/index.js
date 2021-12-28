import {
    ADD_LIST_TO_LISTS,
    ADD_ITEM_TO_PANTRY,
    REMOVE_ITEM_FROM_PANTRY,
    REMOVE_LIST_FROM_LISTS,
    REMOVE_ITEM_FROM_CURRENT_LIST,
    ADD_ITEM_TO_CURRENT_LIST,
    CLEAR_CURRENT_LIST,
    UPDATE_TOTAL,
    CLEAR_TOTAL
} from "../actions";
import { mealsData } from "../components/data/mealsData";

const initialState = {
    previousLists: [],
    pantryItems: [],
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
               currentListItems: '' 
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
        default:
            return{state}
    }
}

export default reducer;