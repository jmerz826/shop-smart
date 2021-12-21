export const ADD_LIST_TO_LISTS = 'ADD_LIST_TO_LISTS';
export const ADD_ITEM_TO_PANTRY = 'ADD_ITEM_TO_PANTRY';

export const addListToLists = (list) => {
    return ({
        type: ADD_LIST_TO_LISTS, payload: list
    })
};

export const addItemToPantry = (item) => {
    return ({
        type: ADD_ITEM_TO_PANTRY, payload: item
    });
};