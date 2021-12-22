import { ADD_LIST_TO_LISTS, ADD_ITEM_TO_PANTRY, REMOVE_ITEM_FROM_PANTRY } from "../actions";
import pantryItems from "../components/pantry/pantryItems";

const initialState = {
    previousLists: [],
    pantryItems: ['granola']
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
                console.log(...state.pantryItems);
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
            })
            
        default:
            return{state}
    }
}

export default reducer;