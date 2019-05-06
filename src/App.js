import React, {Component} from 'react';
import Header from './components/Header'
import Greeting from './components/Greeting';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
/*
TodoList

*/

class App extends Component {
    state = {
        count: 0,
        isLoggedIn: false,
        name: "Asabeneh",
        todos: ["Item 1", "Item 2", "Item 3"],
        todo: "",
        feedback: ''
    };

    handleAdd = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };
    handleMinus = () => {
        if (this.state.count > 0) {
            this.setState(prevState => ({ count: prevState.count - 1 }));
        }
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };
    handleDelete = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index, 1)
        this.setState({ todos })

    }
    handleChange = e => {
        this.setState({
            todo: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.todo) {
            this.setState({
                feedback: 'A value is required'
            })
        }
        else if (this.state.todos.indexOf(this.state.todo) === -1) {
            this.setState(prevState => ({
                todos: [...prevState.todos, this.state.todo]
            }));
        }
        else {
            this.setState({
                feedback: 'An Item does exist'
            })
        }

        this.setState({
            todo: ""
        });

    };
    render() {
        const { isLoggedIn, count, todos } = this.state;
        const status = isLoggedIn ? "LOGOUT" : "LOGIN";
       

        return (
            <div>
            <Header /> 
                <p>{this.state.feedback}</p>
                <AddTodo 
                todo = {this.state.todo}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}/> 
                <TodoList 
                todos = {this.state.todos}
                handleDelete = {this.handleDelete}
                 />
    
                <h1>Count:{count}</h1>
                <button onClick={this.handleAdd}>Add One</button>
                <button onClick={this.handleMinus}>Minus One</button>
                <p>Please {status} </p>
                <button onClick={this.handleLogin}>{status}</button>
                {isLoggedIn && <Greeting name = {this.state.name}/>}
            </div>
        );
    }
}
export default App;