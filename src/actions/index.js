import {TODO_SELECT_ITEM, USER_SELECT_ITEM} from './actionType';

export const selectTodoItem = (todo) => { // 5.2 Define actions
    console.log(todo);
    return {
        type: TODO_SELECT_ITEM,
        payload: todo,
    }
}

export const selectUserItem = (user) => { // 5.2 Define actions
    console.log(user);
    return {
        type: USER_SELECT_ITEM,
        payload: user
    }
}
