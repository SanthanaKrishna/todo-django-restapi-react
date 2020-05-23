import { TodoWatcher } from '../components/todos/TodoSaga';
import { all } from 'redux-saga/effects'

export default function* sagaWatcher() {
    yield all([
        TodoWatcher()
    ])
}