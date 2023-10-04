import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

      // console.log('Authenticated successfully:', response.data);

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
    <div className='flex flex-col'>

			<img
				src='/NavLogo.png'
				alt='Login Background'
				className='h-72 py-10 mx-auto'
			/>


      <div id='signup-area' className='flex'>
        <div id='sigup-box' className='bg-secondary w-1/3 p-4 mx-auto rounded-xl'>
					
					<div className='text-center'>
						<h1 className='text-xl font-bold mb-4'>Sign Up</h1>
					</div>
          
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='mb-1'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='px-2 py-1 border rounded'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='mb-1'>
              Email:
            </label>
            <input
              type='text'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-2 py-1 border rounded'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='username' className='mb-1'>
              Username:
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='px-2 py-1 border rounded'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='mb-1'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='px-2 py-1 border rounded'
            />
          </div>

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
    </div>
  );
};

export default SignUp;
