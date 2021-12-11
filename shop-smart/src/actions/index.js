export const ADD_LIST_TO_LISTS = 'ADD_LIST_TO_LISTS';

export const addToList = (item) => {
    return ({
        type: ADD_LIST_TO_LISTS, payload: item
    })
};