import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index.jsx"
import Error404 from "./pages/404.jsx"
import Game from "./pages/game.jsx"
// import UniversalHeader from "./components/universalHeader.jsx"
// import UniversalFooter from "./components/universalFooter.jsx"
import "./layout.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Index />} />
                <Route path="/game" element={<Game />}></Route>
                <Route path="/login" element={<div></div>}></Route>
                <Route path="/palavras" element={<div></div>}></Route>
                <Route path="/grupos" element={<div></div>}></Route>
                <Route path="/disciplinas" element={<div></div>}></Route>
                <Route path="/professores" element={<div></div>}></Route>
                <Route path="" element={<div></div>}></Route>
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
