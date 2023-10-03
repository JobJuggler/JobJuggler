import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown.tsx';

const NavBar = ({}) => {
  const navigate = useNavigate();

  return (
    <nav className='bg-dominant border-b border-gray-900 dark:bg-gray-900 shadow-md h-auto font-Exo mb-2 sticky top-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 px-3'>
        <div className='flex items-center'>
          <img
            onClick={() => navigate('/')}
            src='/NavLogo.png'
            className='h-10 hover:cursor-pointer md:h-12'
            alt='Logo'
          />
        </div>

        {<DropDown />}

        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='w-6 h-6 stroke-tertiaryText'
            onClick={() => navigate('/profile')}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
