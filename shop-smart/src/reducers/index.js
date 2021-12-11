import { ADD_LIST_TO_LISTS } from "../actions";

const initialState = {
    previousLists: [
        {
            id:1231241325,
            0: {item: 'water', price: 3},
            1: {item:'milk', price:5}
        },
        {
            id:33231212,
            0: { item: 'bread', price: 4 },
            1: {item:'milk', price:5}
        }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_TO_LISTS:
            return ({
                ...state,
                previousLists: action.payload
            })
        default:
            return{state}
    }
}

export default reducer;