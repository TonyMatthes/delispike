import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOrders(action) {
    try {
        const response = yield axios.get('api/order')
        yield put({ type: 'SET_ORDERS', payload: response.data });
    } catch (error) {
        console.log('Error getting orders', error);
    }
}

// function* fetchSpecificOrder(action) {
//     try {
//         const response = yield axios.get(`api/order/${action.payload}`)
//         yield put({ type: 'SET_SPECIFIC_ORDER', payload: response.data });
//     } catch (error) {
//         console.log('Error getting item', error);
//     }
// }

function* addOrder(action) {
    try {
        console.log('posting')
        yield axios.post('api/order', action.payload)
        // yield put({ type: 'FETCH_ORDERS' });
    } catch (error) {
        console.log('Error adding order: ', error)
    }
}
function* editOrder(action) {
    try {
        yield axios.put('api/order', action.payload)
        yield put({ type: 'FETCH_ORDERS' });
    } catch (error) {
        console.log('Error updating order: ', error)
    }
}
function* deleteOrder(action) {
    try {
        yield axios.delete(`api/order/${action.payload}`);
        yield put({ type: 'FETCH_ORDERS' });
    } catch (error) {
        console.log('Error deleting order', error);
    }
}

function* orderSaga() {
    yield takeLatest('FETCH_ORDERS', fetchOrders);
    yield takeLatest('ADD_ORDER', addOrder);
    yield takeLatest('EDIT_ORDER', editOrder);
    yield takeLatest('DELETE_ORDER', deleteOrder);
}

export default orderSaga;