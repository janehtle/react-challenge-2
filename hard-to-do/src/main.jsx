import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";

ReactDOM.createRoot(document.getElementById('root')).render( //added ReactDOM in front of line
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TodoList />} />
        <Route path="todo/:id" element={<TodoDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

