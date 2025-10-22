import { Link } from "react-router-dom";

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <>
            <input type="checkbox" checked={todo.completed} onChange={onToggle} />
            <Link to={`/todo/${todo.id}`}>
                {todo.title}
            </Link>
            <button onClick={onDelete}>Remove</button>
        </>
    )
}

export default TodoItem