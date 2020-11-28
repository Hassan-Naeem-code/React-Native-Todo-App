import { ENTER_TODO, DELETE_TODO, DELETE_ALL_TODO, EDIT_DATA_TODO } from '../actionTypes/ActionTypes';

export function enterDataInTodo(todoData) {
    console.log('Data is', todoData);
    return dispatch => {
        dispatch({
            type: ENTER_TODO,
            payload: todoData
        })
    }
}


export function deleteDataFromTodo(index) {
    return dispatch => {
        dispatch({
            type: DELETE_TODO,
            payload: index
        })
    }
}


export function deleteAllData() {
    return dispatch => {
        dispatch({
            type: DELETE_ALL_TODO
        })
    }
}


export function editDataFromTodoHere(obj) {
    return dispatch => {
        dispatch({
            type: EDIT_DATA_TODO,
            payload: obj
        })
    }
}