import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import * as todoType from './TodoActionTypes';
import * as todoActionCreators from './TodoActions';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//     axios.defaults.xsrfCookieName = "csrftoken";
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${this.props.token}`,
//     };

export function* getTodoItems() {
    console.log('GET saga ++++++++++++++++++++++++++++++++++++')
    try {
        const response = yield call(() => axios.get('http://127.0.0.1:8000/api/todos/'));
        yield put(todoActionCreators.getTodoSuccess(response.data));
        console.log('get ------------------- success')
    } catch (error) {
        yield put(todoActionCreators.getTodoFailure(error))
    }
}

export function* postTodoItem(action) {
    console.log('POST saga ++++++++++++++++++++++++++')
    const { payload } = action;
    try {
        const response = yield call(() => axios.post('http://127.0.0.1:8000/api/todos/', payload))
        yield put(todoActionCreators.addTodoSuccess(response.data));
        console.log('post --------- success')
    } catch (error) {
        yield put(todoActionCreators.addTodoFailure(error))
    }
}

export function* updateTodoItem(action) {
    const { id, title, description } = action.payload;
    console.log('UPDATE saga +++++++++++++++')
    try {
        const response = yield call(() => axios.put(`http://127.0.0.1:8000/api/todos/${id}/`, {
            title,
            description
        }));
        yield put(todoActionCreators.updateTodoSuccess(response.data));
        console.log('update ----------------- success')
    } catch (error) {
        yield put(todoActionCreators.updateTodoFailure(error))
    }
}

export function* deleteTodoItem(action) {
    const { payload: { id } } = action;
    console.log('DELETE saga ++++++++++++++++++++++++++++++++++++')
    try {
        const response = yield call(() => axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`));
        yield put(todoActionCreators.deleteTodoSuccess(response.data));
        console.log('delete ----------------- success')
    } catch (error) {
        yield put(todoActionCreators.deleteTodoFailure(error))
    }
}
export function* TodoWatcher() {
    yield all([
        takeLatest(todoType.GET_TODO, getTodoItems),
        takeLatest(todoType.ADD_TODO, postTodoItem),
        takeLatest(todoType.UPDATE_TODO, updateTodoItem),
        takeLatest(todoType.DELETE_TODO, deleteTodoItem)
    ]);
}
