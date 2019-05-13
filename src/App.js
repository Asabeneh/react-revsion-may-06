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
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import AddUser from './components/AddUser';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Topics from './components/Topics';
import User from './components/User';
import Navbar from './components/Navbar';
import Count from './components/Count';
import CountryList from './components/CountryList';

/*
TodoList

*/

class App extends Component {
  state = {
    count: 0,
    isLoggedIn: false,
    name: 'Asabeneh',
    todos: ['Item 1', 'Item 2', 'Item 3'],
    todo: '',
    feedback: '',
    users: [],
    countries: []
  };

  handleAdd = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  handleMinus = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  };
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };
  handleDelete = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };
  addUser = user => {
    this.setState(prevState => {
      return {
        users: [...prevState.users, user]
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.todo) {
      this.setState({
        feedback: 'A value is required'
      });
    } else if (this.state.todos.indexOf(this.state.todo) === -1) {
      this.setState(prevState => ({
        todos: [...prevState.todos, this.state.todo]
      }));
    } else {
      this.setState({
        feedback: 'An Item does exist'
      });
    }

    this.setState({
      todo: ''
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    //Using component should update you can control your component
    if (nextState.count > 10) {
      return false;
    }
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props');
    console.log(nextProps);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componet did update');
    console.log('prevProps', prevProps, 'prevState', prevState);
    //Good place to save data
  }
  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          countries: data
        });
      });
    console.log('Component Did Mount');
    //This is your place to fetch data from api
    //
  }

  render() {
    const { isLoggedIn, count, todos } = this.state;
    const status = isLoggedIn ? 'LOGOUT' : 'LOGIN';

    return (
      <Router>
        <div>
          <Header 
          title="Lets Get Started With React"
          year = {new Date ().getFullYear()}
          
          />
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
              component={props => {
                return isLoggedIn ? <Topics {...props} /> : <Redirect to="/" />;
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
            <Route
              exact
              path="/add-user"
              component={props => {
                return <AddUser addUser={this.addUser} />;
              }}
            />
            <Route
              path="/add-todo"
              component={props => {
                return (
                  <AddTodo
                    todo={this.state.todo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/todos"
              component={() => {
                return (
                  <TodoList
                    todos={this.state.todos}
                    handleDelete={this.handleDelete}
                  />
                );
              }}
            />
            <Route path="/count" component={(props) => {
              return <Count 
              count={count}
              handleAdd = {this.handleAdd}
              handleMinus = {this.handleMinus}
               /> }} />
            <Route path="/countries" component={() => {
              return <CountryList countries = {this.state.countries} />
            }} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
