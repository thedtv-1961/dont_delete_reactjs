import React from 'react';

class ToDoItem extends React.Component {
    render() {

        return(
        <p>{this.props.title}</p>
        );
    }
}

export default ToDoItem;