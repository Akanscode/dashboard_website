import React, { useState } from 'react';
import { Label, TextInput, Button, Card } from 'flowbite-react';

const Login = ({ setIsLoggedIn   }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };
 

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col max-w-md">
          <Card className="max-w-sm bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
              <div className="mb-4 block">
                <Label htmlFor="username" className="block text-sm font-semibold mb-2">
                  Username
                </Label>
                <TextInput
                  type="text"
                  id="username"
                  sizing="base"
                  placeholder="Username"
                  className="placeholder-gray-50"
                 value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Password
                </Label>
                <TextInput
                  type="password"
                  id="password"
                  sizing="base"
                  placeholder="Password"
                  className="mt-1 placeholder-gray-50  bg-white rounded-md focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type='submit'
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
              >
                Login
              </Button>
            </form>
            {error && <p className='text-red-400 font-thin'>{error}</p>}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
