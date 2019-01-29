import { combineReducers } from 'redux';

const orderItems = (state = {key:0, orders:[]}, action) => {

    switch (action.type) {
        case 'ADD_ORDER_ITEM':
            return {key:state.key + 1, orders:[ ...state.orders, action.payload]};
        case 'REMOVE_ORDER_ITEM':
            return {...state, orders: state.orders.filter(item => action.payload.orderSpecificId !== item.orderSpecificId)};
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