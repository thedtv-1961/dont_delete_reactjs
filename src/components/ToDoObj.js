import React from 'react';

class ToDoObj extends React.Component {
	render() {
		return (
			<div>
				Name = {this.props.obj.name} <br/>
				Ange = {this.props.obj.age}
			</div>
		);
	}
}

export default ToDoObj;