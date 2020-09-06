/**
 * 0. Install: redux, react-redux
 * 
 * 1. Import createStore from redux inside root/index.js file
 * 
 * 2. Create reducers, Ex: src/reducers
 *  2.1 create todo-reducer.js, user-reducer.js,
 *  2.2 create reducer/index.js combine all file created at step 2.1
 *  2.3 create store in root/index.js 
 * 
 * 3. Create Provider from `react-redux`
 *  3.1 import Provider inside root/index.js 
 *  3.2 Add <Provider> tag cover <App> component inside root/index.js 
 * 
 * 4. Create container
 *  4.1 create containers directory
 *  4.2 Create Component
 *  4.3 Map state to Props
 *  4.4 Connect mapStateToProps with Component
 * 
 * 5. Create Action
 *  5.1 Create `actions/actionType.js`: define const actions string
 *  5.2 Define actions inside `actions/index.js` return:
 *      + action (string) -> step 5.1
 *      + payload (string) -> data
 *  5.3 Inside Container (at step 4) add function `mapDispatchToProps(dispatch)`
 *      + using `bindActionCreators` from `redux` to create action
 *      + add `mapDispatchToProps` to `connect`
 *      + call action from this.props.xxx and pass parameter to function
 */


import React from 'react';
import TodoContainer from '../containers/todo-list';
import UserContainer from '../containers/user-list';

class ReduxTest extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <p>This's Redux test.</p>
            <hr></hr>
            <TodoContainer></TodoContainer>
            <hr></hr>
            <UserContainer></UserContainer>
        </div>);
    }
}

export default ReduxTest;
