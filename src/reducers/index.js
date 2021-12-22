import { ADD_LIST_TO_LISTS, ADD_ITEM_TO_PANTRY, REMOVE_ITEM_FROM_PANTRY, REMOVE_LIST_FROM_LISTS } from "../actions";

const initialState = {
    previousLists: [],
    pantryItems: []
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
            })
        
            
        default:
            return{state}
    }
}

export default reducer;