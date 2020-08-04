import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoObj from './ToDoObj';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					name: 'Breaskfast',
					status: true,
				},
				{
					name: 'Go to school',
					status: false,
				},
				{
					name: 'Buy a big board',
					status: false,
				},
			],
		};
	}

	render() {
		return (
			<div>
				<ToDoItem title="Test" />
				<div>
					<h3>List of Todo</h3>
					{this.state.todos.map((item, index) => <ToDoObj key={index} todo={item} />)}
				</div>
			</div>
		);
	}
}

export default ToDoList;