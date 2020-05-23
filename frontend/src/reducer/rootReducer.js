import { combineReducers } from 'redux';
import { todoReducer } from '../components/todos/TodoReducers';


export default combineReducers({
    todoState: todoReducer
})