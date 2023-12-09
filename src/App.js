import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Button } from 'flowbite-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Button className=' bg-red-200 text-white' onClick={handleLogout}>Logout</Button>
          <Dashboard />
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
