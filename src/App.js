import React, {Component} from 'react';
import Todos from "./components/Todos";
import './App.css'; //global css


{/*FOR REFERENCE: COMMENT STRUCTURE OF JSX */}

class App extends Component{
    state = {
        todos: [
            {
                id:1,
                title: 'Take out the trash',
                completed:true
            },
            {
                id:2,
                title: 'Dinner with the wife',
                completed:false
            },
            {
                id:3,
                title: 'Meeting with boss',
                completed:false
            },
        ]
    }
    //Toggle complete
    markComplete = (id) => {
       this.setState({
           todos:this.state.todos.map(todo =>  {
               if(todo.id === id) {
                   todo.completed = !todo.completed
               }
               return todo
           })
       });
    }


    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id)]})
    }

    render() {

        return ( //JSX class becomes className
            <div className="App">
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={ this.delTodo}
                />   {/* react component from .components/Todos */}
            </div>
        );
    }
}

export default App;
