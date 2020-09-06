import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ToDoList from './components/ToDoList';
import About from './components/About';
import Test from './components/Test';
import ReduxTest from './components/ReduxTest';

function App() {
  return (
    <Router>
      <div className="App">
        <table border="1">
          <tbody>
            <tr>
              <td>
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/test">Test</Link>
              </td>
              <td>
                <Link to="/about">About</Link>
              </td>
              <td>
                <Link to="/redux-test">Redux</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        <Switch>
          <Route path="/" exact>
            <ToDoList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/test" exact>
            <Test />
          </Route>
          <Route path="/redux-test" exact>
            <ReduxTest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
