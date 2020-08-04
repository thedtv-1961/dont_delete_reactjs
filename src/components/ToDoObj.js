import React from 'react';
import './ToDoObj.css';

class ToDoObj extends React.Component {
	render() {
		return (
		<p className={this.props.todo.status ? 'done' : null}>{this.props.todo.name}</p>
		);
	}
}

export default ToDoObj;