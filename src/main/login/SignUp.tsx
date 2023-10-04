import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

interface authInfo {
  username: string;
  password: string;
}

type props = {
  setShouldDisplayNavBar: (bool: boolean)=>void;
  shouldDisplayNavBar: boolean;
}

const SignUp: React.FC<props> = ({shouldDisplayNavBar, setShouldDisplayNavBar}) => {
  useEffect(()=>{
    if (shouldDisplayNavBar){
      setShouldDisplayNavBar(false);
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post<authInfo>('/api/auth/signin', {
        name,
        email,
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

  const toLogin = () => {
    navigate('/');
  };

  return (
    <div className='relative flex justify-center items-center h-screen'>
      <img src="/NavLogo.png" alt="Login Background" className="absolute left-31 top-20 w-20 h-21 object-cover" />
			<div id='signup-area' className="bg-dominant relative flex flex-col items-center w-2/2 p-8 border rounded-lg bg-opacity-80 z-10">
				<h1 className='text-xl font-bold mb-4'>Sign Up</h1>
        <TextInput label='Name:' setText={setName}/>
        <TextInput label='Email:' setText={setEmail}/>
        <TextInput label='Username:' setText={setUsername}/>
        <TextInput label='Password:' setText={setPassword} type='password'/>
        
        <button
          onClick={() => handleSignUp()}
          className='px-4 py-2 rounded w-full mb-2'
        >
          Sign Up
        </button>

        <div className='flex justify-between'>
          <button
            className='px-4 py-2 rounded mr-2'
            onClick={() => {
              toLogin();
            }}
          >
            Sign In
          </button>
          <button className='px-4 py-2 rounded'>Forgot Password</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
