import {combineReducers} from 'redux';
import TodoReducer from './todo-reducer';
import UserReducer from './user-reducer';

const allReducers = combineReducers({
    todos: TodoReducer,
    users: UserReducer,
});

export default allReducers;
