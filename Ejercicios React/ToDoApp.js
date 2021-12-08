import React, { useState } from "react";

const TodoApp = () => {
    const [todos, setTodos] = useState(["Item 1", "Item 2", "Item 3"]);

    return (
        <div className="App">
            <h1>To Do App</h1>
            <TodoCount todos={todos} />
            <TodoList todos={todos} />
            <AddTodo setTodos={setTodos} />
        </div>
    )
}

function TodoCount({ todos }) {
    return (
        <div>
            <strong>Total Todos: {todos.length}</strong>
        </div>
    )
}

function TodoList({ todos }) {

    return (

        <ul>
            {
                todos.map((todo) => (
                    <li key={todo}>
                        {todo}
                    </li>
                ))
            }
        </ul>
    )
}

function AddTodo({ setTodos }) {
    function handleSubmit(event) {
        event.preventDefault();
        const todo = event.target.elements.todo.value;
        setTodos(prevTodos => [...prevTodos, todo]);
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" id="todo" />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoApp;