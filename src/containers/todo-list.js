import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTodoItem} from '../actions';

class TodoList extends React.Component { // 4.2 Create Component
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h4>Todo List: `newTodo` is props, it converted from state inside `reducers/index.js`</h4>
            <ul>
                {this.props.newTodo.map((item) => (
                    <li key={item.id} onClick={this.props.onClicOnToDoLi.bind(this, item)}>{item.name}</li>
                ))}
            </ul>
        </div>);
    }
}

function mapStateToProps(state) { // 4.3 Map state to Props
    return {
        newTodo: state.todos, // from `allReducers.todos` inside `reducers/index.js`
    }
}

function mapDispatchToProps(dispatch) { // 5.3 Inside Container (at step 4) add function `mapDispatchToProps(dispatch)`
    return bindActionCreators({onClicOnToDoLi: selectTodoItem}, dispatch);
}

let TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList); // 4.4 Connect mapStateToProps with Component

export default TodoContainer;
