import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieInfo from "./pages/MovieInfo.jsx";

ReactDOM.createRoot(document.getElementById('root')).render( //added ReactDOM to beginning of line
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MovieInfo />} />
    </Routes>
  </BrowserRouter>
)
