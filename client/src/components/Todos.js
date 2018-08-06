import React from "react"

export class Todos extends React.Component {
    state = {
        todos: [],
        // todos: [
        //     { description: 'exercise', isDone: true },
        //     { description: 'rest', isDone: false },
        //     { description: 'alter clothes', isDone: false },
        //     { description: 'finish proposal', isDone: false },
        //     { description: 'sleep!', isDone: false }
        // ],
        newTodoDescription: ''
    }

    componentDidMount() {
        fetch('/todos/all')
            .then(res => res.json())
            .then(todos => this.setState({ todos }))
    }

    handleAddTodo = () => {
        // Get new todo description
        const newTodoDescription = this.state.newTodoDescription
        // Create new todo object
        const newTodo = {
            description: newTodoDescription,
            isDone: false
        };
        // Update react component state
        // Update state with setState instead of push
        // Memory issues, and weird bugs
        // do not mutate origin but create new
        const newTodos = [
            ...this.state.todos, // spread the origin array
            newTodo,
        ];
        this.setState({
            todos: newTodos
        });
        fetch('/todos/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })
    }

    handleOnChange = (event) => {
        // Destructuring
        const { name, value } = event.target;
        // name = 'newTodoDescription'
        // value = 'something to do'
        this.setState({
            // newTodoDescription: value, more generic for [name]
            [name]: value,
        })
    }

    handleTodoClick = (currentTodo) => {
        currentTodo.isDone = !currentTodo.isDone;
        // if (currentTodo.isDone) {
        //     currentTodo.isDone = false;
        // } else {
        //     currentTodo.isDone = true;
        // }
        const updatedState = {
            todos: this.state.todos
        }
        this.setState(updatedState)
    
    }

    render() {
        return <div>
            <h1>To do list</h1>
            <label htmlFor='newTodoDescription'></label>
            <input
                type='text'
                value={this.state.newTodoDescription}
                name='newTodoDescription'
                id='newTodoDescription'
                onChange={this.handleOnChange} />
            <button onClick={this.handleAddTodo}>+</button>

            <p>
                <ol>
                    {this.state.todos.map((todo) => {
                        let completeClass = '';
                        if (todo.isDone) {
                            completeClass = "complete";
                        }
                        return <li
                            className={completeClass}
                            onClick={() => this.handleTodoClick(todo)}>{todo.description}</li>
                    })}
                </ol>
            </p>
        </div>
    }

}
