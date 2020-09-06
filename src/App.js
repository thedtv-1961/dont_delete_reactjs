import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { initReactI18next } from 'react-i18next';
import './App.css';
import ToDoList from './components/ToDoList';
import About from './components/About';

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
                <Link to="/about">About</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
