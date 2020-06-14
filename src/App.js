import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos";
import './App.css'; //global css
import Header from './components/Layout/header';
import {AddTodo} from "./components/addTodo";
import about from "./components/pages/about";
import {v4 as uuidv4} from 'uuid';
import axios from 'axios'


{/*FOR REFERENCE: COMMENT STRUCTURE OF JSX */
}

class App extends Component {
    state = {
        todos:[]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.setState({todos: res.data}))
    }


    //Toggle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        });
    }


    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    //addTodo
    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render() {

        return ( //JSX class becomes className
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route  exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.delTodo} />
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={about} />

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
