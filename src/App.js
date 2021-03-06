import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Scene from './components/scene';
import Home from './components/home';
import Acerca from './components/acerca';
export default function ConceptosBasicos() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour" element={<Scene />} />
            <Route path="/Acerca" element={<Acerca />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    );
}