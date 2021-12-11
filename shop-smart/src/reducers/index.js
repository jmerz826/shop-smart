import { ADD_TO_LIST } from "../actions";

const initialState = {
    previousLists: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_TO_LIST):
            return ({
                ...state,
                previousLists: [...state.previousLists, action.payload]
            })
        default:
            return{state}
    }
}

export default reducer;