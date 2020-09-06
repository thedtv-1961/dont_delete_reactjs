import React from 'react';
import './ToDoObj.css';

class ToDoObj extends React.Component {
	render() {
		const { index, todo, onToDoItemClick } = this.props;

		return (
			<p className={todo.status ? 'done' : null} onClick={onToDoItemClick.bind(this, index)}>{todo.name}</p>
		);
	}
}

export default ToDoObj;