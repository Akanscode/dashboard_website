import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

 const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };


  return (
    <BrowserRouter>
      <div>
        {isLoggedIn ? (
          <div className=''>
            
            
               <Routes>
              <Route path="/" element={<Dashboard  handleLogout={handleLogout}/>} />
             
            </Routes>
           
          
           
          </div>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
