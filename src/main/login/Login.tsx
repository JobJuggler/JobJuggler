import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/logo.png';

interface authInfo {
  username: string;
  password: string;
}


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post<authInfo>('/api/auth', {
        username,
        password,
      });

      // Assuming the server responds with authentication details
      console.log('Authenticated successfully:', response.data);

      // Redirect to dashboard or any other page after successful sign-in
      // navigate('/dashboard');
      if (response.status === 200) {
      navigate('/dashboard');
      }
  
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };
  return (
    <div className="relative flex justify-center items-center h-screen">
      <img src={loginImage} alt="Login Background" className="absolute left-31 top-20 w-20 h-21 object-cover" />
      <div className="relative flex flex-col items-center w-2/2 p-8 border rounded-lg bg-white bg-opacity-80 z-10">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 border rounded"
          />
        </div>
        <button onClick={handleSignIn} className="px-4 py-2 rounded w-full mb-2">Sign In</button>
        <div className="flex justify-between">
          <button  className="px-4 py-2 rounded mr-2">Sign Up</button>
          <button  className="px-4 py-2 rounded">Forgot Password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
