import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Registration from "./components/pages/Registration.jsx"
import Users from "./components/pages/Users.jsx"
import Homepage from "./components/Homepage.jsx"
import CreateTask from './components/CreateTask';
import CreateUser from './components/CreateUser';
import { withRouter } from 'react-router';


class App extends React.Component {
  logOutUser = () => {
    localStorage.removeItem('current-user');
    this.props.history.push('/login');
        }

  render() {
    return (
      <div>
        <div className="header-links">
          <Link className="card-style" to="/">Homepage</Link> 
          <Link className="card-style" to="/login">Login</Link> 
          <Link className="card-style" to="/registration">Registration</Link>
          <Link className="card-style" to="/users">Users</Link>
          <Link className="card-style" to="/create-task">Create Task</Link>
          <Link className="card-style" to="/create-user">Create User</Link>

          <Link className="card-style" onClick={this.logOutUser}>Log Out</Link>
        </div>

        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>
          
          <Route exact path="/create-task">
            <CreateTask />
          </Route>

          <Route exact path="/create-user">
            <CreateUser />
          </Route>

        </Switch>

      </div>
    );
  }
}
export default withRouter(App);