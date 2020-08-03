import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoObj from './ToDoObj';

class ToDoList extends React.Component {
	render() {
		let objInput = {name: 'Abc', age: 10};
		return (
			<div>
				<ToDoItem title="Breakfast" />
				<ToDoItem title="Brush my teeth" />
				<ToDoItem title="Wash my face" />
				<ToDoObj obj={objInput} />
			</div>
		);
	}
}

export default ToDoList;