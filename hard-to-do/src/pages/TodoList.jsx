import useTodos from "../hooks/useTodos"; //import CRUD functions to use
import { useState } from "react";
import { Link } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

function TodoList() {
    const { todos, add, remove, edit } = useTodos(); //we can now use our custom hooks
    const [newTitle, setNewTitle] = useState("");

    function handleAdd(e) {
        e.preventDefault(); //prevents window from resorting to default actions (e.g. reload whole page when updating)

        if (!newTitle.trim()) return;
        add(newTitle.trim());
        setNewTitle("");
    }

    return (
        <>
            <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
                <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Add new task." />
                <button type="submit">Add</button>
            </form>

            {todos.length === 0 && <p>Crickets... Add some tasks!</p>}

            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={() => 
                        edit(todo.id, { completed: !todo.completed })} onDelete={() => remove(todo.id)
                    } />
                ))}
            </ul>
        </>
    )
}

export default TodoList


