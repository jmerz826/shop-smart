export const ADD_LIST_TO_LISTS = 'ADD_LIST_TO_LISTS';
export const ADD_ITEM_TO_PANTRY = 'ADD_ITEM_TO_PANTRY';
export const REMOVE_ITEM_FROM_PANTRY = 'REMOVE_ITEM_FROM_PANTRY';
export const REMOVE_LIST_FROM_LISTS = 'REMOVE_LIST_FROM_LISTS';
export const REMOVE_ITEM_FROM_CURRENT_LIST = 'REMOVE_ITEM_FROM_CURRENT_LIST';
export const ADD_ITEM_TO_CURRENT_LIST = 'ADD_ITEM_TO_CURRENT_LIST';
export const CLEAR_CURRENT_LIST = 'CLEAR_CURRENT_LIST';

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

export const removeItemFromPantry = (item) => {
    return ({
        type: REMOVE_ITEM_FROM_PANTRY, payload: item
    });
};

export const removeListFromLists = (list) => {
    return ({
        type: REMOVE_LIST_FROM_LISTS, payload: list
    });
};


export const removeItemFromCurrentList = (item) => {
    return ({
        type: REMOVE_ITEM_FROM_CURRENT_LIST, payload: item
    });
};

export const addItemToCurrentList = (item) => {
    return ({
        type: ADD_ITEM_TO_CURRENT_LIST, payload: item
    });
};

export const clearCurrentList = () => {
    return ({
        type: CLEAR_CURRENT_LIST
    });
};