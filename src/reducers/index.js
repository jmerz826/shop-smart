import { ADD_LIST_TO_LISTS, ADD_ITEM_TO_PANTRY } from "../actions";

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
            
        default:
            return{state}
    }
}

export default reducer;