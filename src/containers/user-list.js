import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUserItem} from '../actions'

class UserList extends React.Component { // 4.2 Create Component
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h4>User List: `newAllUsers` is props, it converted from state inside `reducers/index.js`</h4>
                <ul>
                    {this.props.newAllUsers.map((item) => (
                        <li key={item.id} onClick={this.props.onCLickUserLi.bind(this, item)}>{item.user}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) { // 4.3 Map state to Props
    return {
        newAllUsers: state.users, // from `allReducers.users` inside `reducers/index.js`
    }
}

function mapDispatchToProps(dispatch) { // 5.3 Inside Container (at step 4) add function `mapDispatchToProps(dispatch)`
    return bindActionCreators({onCLickUserLi: selectUserItem}, dispatch);
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList); // 4.4 Connect mapStateToProps with Component

export default UserContainer;
