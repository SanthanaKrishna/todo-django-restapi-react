import * as actionTypes from './TodoActionTypes';

/** GET request / Get todo list */
export const getTodo = () => {
    return {
        type: actionTypes.GET_TODO
    }
}
export const getTodoSuccess = (data) => {
    return {
        type: actionTypes.GET_TODO_SUCCESS,
        payload: data
    }
}
export const getTodoFailure = (error) => {
    return {
        type: actionTypes.GET_TODO_FAILURE,
        error,
    }
}

/** POST request / add new todo data */
export const addTodo = (data) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: data
    }
}
export const addTodoSuccess = (data) => {
    return {
        type: actionTypes.ADD_TODO_SUCCESS,
        payload: data
    }
}
export const addTodoFailure = (error) => {
    return {
        type: actionTypes.ADD_TODO_FAILURE,
        error
    }
}

/** edit todo */
export const editTodo = (item) => {
    return {
        type: actionTypes.EDIT_TODO,
        payload: item
    }
}

/** PUT requets / update todo items */
export const updateTodo = (item) => {
    return {
        type: actionTypes.UPDATE_TODO,
        payload: item
    }
}
export const updateTodoSuccess = (item) => {
    return {
        type: actionTypes.UPDATE_TODO_SUCCESS,
        payload: item
    }
}
export const updateTodoFailure = (error) => {
    return {
        type: actionTypes.UPDATE_TODO_FAILURE,
        error
    }
}

/** DELETE Request/ delet todo item */
export const deleteTodo = (item) => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: item
    }
}
export const deleteTodoSuccess = (item) => {
    return {
        type: actionTypes.DELETE_TODO_SUCCESS,
        payload: item
    }
}
export const deleteTodoFailure = (error) => {
    return {
        type: actionTypes.DELETE_TODO_FAILURE,
        error
    }
}