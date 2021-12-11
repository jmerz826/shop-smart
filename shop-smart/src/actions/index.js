export const ADD_TO_LIST = 'ADD_TO_LIST';

const addToList = (item) => {
    return ({
        type: ADD_TO_LIST, payload: item
    })
};

export default addToList;