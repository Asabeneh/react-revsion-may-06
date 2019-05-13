import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  Prompt
} from 'react-router-dom';
import Header from './components/Header';
import Greeting from './components/Greeting';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import AddUser from './components/AddUser';
/*
TodoList

*/
const Home = props => {
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
};
const About = props => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};
const Contact = props => {
  return (
    <div>
      <h1>Contact me please</h1>
    </div>
  );
};
const HTMLPage = props => {
  return (
    <div>
      <h3>Lets learn about HTML</h3>
    </div>
  );
};
const CSSPage = props => {
  return (
    <div>
      <h3>Lets learn about CSS</h3>
    </div>
  );
};
const JSPage = props => {
  return (
    <div>
      <h3>Lets learn about JS</h3>
    </div>
  );
};
const Topics = props => {
  const path = props.match.path;
  console.log(path);
  console.log(props);
  return (
    <div>
      <h2>Topics</h2>
      <hr />
      <ul>
        <li>
          <NavLink to={`${path}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/js`}>JavaScript</NavLink>
        </li>
      </ul>
      <Route path={`${path}/html`} component={HTMLPage} />
      <Route path={`${path}/css`} component={CSSPage} />
      <Route path={`${path}/js`} component={JSPage} />
    </div>
  );
};
const User = ({ username }) => {
  return (
    <div>
      <h4>Welcome, {username.toUpperCase()}</h4>
    </div>
  );
};

class App extends Component {
  state = {
    isLoggedIn: false
  };
  handleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    const names = ['John', 'David', 'Brook', 'Asab'];
    const index = Math.floor(Math.random() * names.length);
    const name = names[index].toLowerCase();
    const { isLoggedIn } = this.state;
    const status = isLoggedIn ? 'LOGOUT' : 'LOGIN';

    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/topics">TOPICS</NavLink>
            </li>
            <li>
              <NavLink to={`/user/${name}`}>User {names[index]}</NavLink>
            </li>
          </ul>
          <button onClick={this.handleLogin}>{status}</button>
          <Prompt
            when={!isLoggedIn}
            message={location => {
              if (location.pathname.startsWith('/topics')) {
                return 'Are you sure you like to leave this page?';
              }
            }}
          />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/topics"
              component={(props) => {
                return isLoggedIn ? <Topics {...props} /> : <Redirect to="/" />
              }}
            />
            <Route
              path="/user/:username"
              component={({ match }) => {
                return isLoggedIn ? (
                  <User username={match.params.username} />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
