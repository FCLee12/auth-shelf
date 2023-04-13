import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        console.log('action.payload', action.payload)
        yield axios.delete(`/api/shelf/delete/${action.payload}` )

        yield put({type: 'FETCH_ITEMS'})
    } catch (error) {
        console.log('error deleting item', error)
    }
}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem)
}

export default deleteItemSaga;