import { useState } from 'react'
import './App.css'

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet /> {/* this lets nested routes TodoList, TodoDetail render inside this layout */}
    </>
  )
}

export default App
