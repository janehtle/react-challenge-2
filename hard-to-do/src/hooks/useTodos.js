import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'; //generates unique ids

const STORAGE_KEY = "todos_v1";

function useTodos() {
    const [todos, setTodos] = useState(() => { //loads initial todos from localStorage
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        } catch (err) {
            console.error("Cannot write todos to localStorage", err);
        }
    }, [todos]);

    //CRUD functions (add, remove, edit)
    const add = (title) => {
        const newTodo = {id: nanoid(), title, complete: false, createdAt: Date.now()};
        setTodos(task => [newTodo, ...task]);
        return newTodo;
    }

    const edit = (id, updates) => setTodos(task => task.map(x => x.id === id ? { ...x, ...updates } : x));
    const remove = (id) => setTodos(task => task.filter(x => x.id !== id));

    return { todos, add, edit, remove }; //CRUD functions are created, now we are returning that so we can export and use elsewhere
}

export default useTodos