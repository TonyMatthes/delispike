import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    try {
        const response = yield axios.get('api/menu')
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (error) {
        console.log('Error getting items', error);
    }
}

// function* fetchSpecificItem(action) {
//     try {
//         const response = yield axios.get(`api/item/${action.payload}`)
//         yield put({ type: 'SET_SPECIFIC_ITEM', payload: response.data });
//     } catch (error) {
//         console.log('Error getting item', error);
//     }
// }

function* addItem(action) {
    try {
        yield axios.post('api/menu', action.payload)
        yield put({ type: 'FETCH_ITEMS' });
    } catch (error) {
        console.log('Error adding item: ', error)
    }
}
function* editItem(action) {
    try {
        yield axios.put('api/menu', action.payload)
        yield put({ type: 'FETCH_ITEMS' });
    } catch (error) {
        console.log('Error updating item: ', error)
    }
}
function* deleteItem(action) {
    try {
        yield axios.delete(`api/menu/${action.payload}`);
        yield put({ type: 'FETCH_ITEMS' });
    } catch (error) {
        console.log('Error deleting item', error);
    }
}

function* menuSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('EDIT_ITEM', editItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default menuSaga;