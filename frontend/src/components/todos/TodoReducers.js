import {
    ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
    GET_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE,
    EDIT_TODO,
    UPDATE_TODO, UPDATE_TODO_FAILURE, UPDATE_TODO_SUCCESS,
    DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
} from "./TodoActionTypes"


const initialState = {
    isLoading: true,
    todoList: [],
    todoEdit: {
        isEditItem: false,
    },
    isTodoUpdated: false,
    isTodoDeleted: false,
    error: '',
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
        case ADD_TODO:
        case UPDATE_TODO:
        case DELETE_TODO:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todoList: action.payload,
                isTodoUpdated: false,
                isTodoDeleted: false,
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case UPDATE_TODO_SUCCESS:
            const updatedItem = { ...state.todoEdit, isEditItem: false }
            return {
                ...state,
                isLoading: false,
                isTodoUpdated: true,
                todoEdit: updatedItem
            }
        case EDIT_TODO:
            const EditedItem = { ...state.todoEdit, isEditItem: true, ...action.payload }
            return {
                ...state,
                todoEdit: EditedItem,
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                isTodoDeleted: true,
            }
        case GET_TODO_FAILURE:
        case ADD_TODO_FAILURE:
        case UPDATE_TODO_FAILURE:
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state;
    }
}