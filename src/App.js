import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
     
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
     
    </Router>
  );
};

export default App;
