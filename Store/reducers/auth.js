import { ENTER_TODO, DELETE_TODO, DELETE_ALL_TODO, EDIT_DATA_TODO } from '../actionTypes/ActionTypes';
const INIT_STATE = {
    name: 'MUHAMMAD HASSAN NAEEM',
    todo: [],
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ENTER_TODO:
            let cloneTodo = state.todo.slice(0);
            cloneTodo.push(action.payload);
            console.log('Data enter in clone data', cloneTodo);
            return {
                ...state,
                todo: cloneTodo
            }
        case DELETE_TODO:
            let cloneTodoAgain = state.todo.slice(0);
            cloneTodoAgain.splice(action.payload, 1);
            return {
                ...state,
                todo: cloneTodoAgain
            }
        case DELETE_ALL_TODO:
            let cloneTodoAgainAgain = state.todo.slice(0);
            cloneTodoAgainAgain.splice(0);
            return {
                ...state,
                todo: cloneTodoAgainAgain
            }
        case EDIT_DATA_TODO:
            let cloneTodoAgainAgainAgain = state.todo.slice(0);
            cloneTodoAgainAgainAgain.splice(action.payload.index, 1, action.payload.data);
            return {
                ...state,
                todo: cloneTodoAgainAgainAgain,
            }
        default:
            return state;
    }
}