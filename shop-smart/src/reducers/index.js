import { ADD_LIST_TO_LISTS } from "../actions";

const initialState = {
    previousLists: []
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
            }
            
        default:
            return{state}
    }
}

export default reducer;