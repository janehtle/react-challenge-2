import { useParams, Link, useNavigate } from "react-router-dom";
import useTodos from "../hooks/useTodos";
import TodoForm from "../components/TodoForm";

function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todos, edit, remove } = useTodos();

    const todo = todos.find(task => task.id === id);
    if (!todo) return <p>Task not found.</p>;

    function handleSave(newTitle) {
        edit(id, { title: newTitle });
        navigate("/");
    }

    return (
        <>
        <Link to="/">Back</Link>
        <h2>Edit Task</h2>
        <TodoForm initialValue={todo.title} onSave={handleSave} />
        <button onClick={() => { remove(id); navigate("/"); }}>Delete</button>
        </>
    );
}

export default TodoDetail