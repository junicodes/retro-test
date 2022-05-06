import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div data-testid="app-load" className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;