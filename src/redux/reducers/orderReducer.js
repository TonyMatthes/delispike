import { combineReducers } from 'redux';

const orderItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ORDER_ITEM':
            return [...state, { ...action.payload}];
        case 'REMOVE_ORDER_ITEM':
            return state.filter(item => action.payload !== item.id);
        case 'CLEAR_REDUCERS':
            return state = [];
        default:
            return state;
    }
}

const customer = (state = {}, action) => {
    switch (action.type) {
        case 'FORMAT_CUSTOMER':
            return action.payload;
        case 'CLEAR_REDUCERS':
            return state = {};
        default:
            return state;
    }
}

export default combineReducers({
    orderItems,
    customer,
});