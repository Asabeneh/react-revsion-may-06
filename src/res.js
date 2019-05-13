import React, { Component } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AddUser from "./components/AddUser";
/*
TodoList

*/

class App extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }
    state = {
        count: 0,
        isLoggedIn: false,
        name: "Asabeneh",
        todos: ["Item 1", "Item 2", "Item 3"],
        todo: "",
        feedback: "",
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
                feedback: "A value is required"
            });
        } else if (this.state.todos.indexOf(this.state.todo) === -1) {
            this.setState(prevState => ({
                todos: [...prevState.todos, this.state.todo]
            }));
        } else {
            this.setState({
                feedback: "An Item does exist"
            });
        }

        this.setState({
            todo: ""
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
        console.log('Component will receive props')
        console.log(nextProps)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componet did update')
        console.log('prevProps', prevProps, 'prevState', prevState)
        //Good place to save data

    }
    componentDidMount() {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url).then(response => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    countries: data
                })
            })
        console.log("Component Did Mount");
        //This is your place to fetch data from api
        //
    }
    render() {
        console.log("I am the render method");
        const { isLoggedIn, count, todos } = this.state;
        const status = isLoggedIn ? "LOGOUT" : "LOGIN";
        console.log(this.state.countries)
        return (
            <div>
                <h1>Total number of countries: {this.state.countries.length}</h1>
                <h1>{this.state.users.length}</h1>
                <AddUser addUser={this.addUser} />
                <Header />
                <p>{this.state.feedback}</p>
                <AddTodo
                    todo={this.state.todo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />

                <h1>Count:{count}</h1>
                <button onClick={this.handleAdd}>Add One</button>
                <button onClick={this.handleMinus}>Minus One</button>
                <p>Please {status} </p>
                <button onClick={this.handleLogin}>{status}</button>
                {isLoggedIn && <Greeting name={this.state.name} />}
            </div>
        );
    }
}
export default App;
