import { useState } from "react";

function TodoForm({ initialValue, onSave }) {
    const [value, setValue] = useState(initialValue);

    function handleSubmit(e) {
        e.preventDefault();

        if (!value.trim()) return;
        onSave(value.trim());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm