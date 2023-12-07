import React, { useState } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = () => {
    if (username && password) {
      handleLogin(username, password);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col max-w-md">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="flex max-w-md flex-col gap-4">
              <div className="mb-4 block">
                <Label htmlFor="username" className="block text-sm font-semibold mb-2">
                  Username
                </Label>
                <TextInput
                  type="text"
                  id="username"
                  sizing="md"
                  placeholder="Username"
                  className="placeholder-gray-50 bg-white rounded-md focus:outline-none"
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
                  sizing="md"
                  placeholder="Password"
                  className="block w-full px-5 mt-1 placeholder-gray-50 bg-white rounded-md focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                onClick={handleUserLogin}
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
