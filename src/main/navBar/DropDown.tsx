import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDownItem from './DropDownItem';

const DropDown: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('Navigate');

  const navigate = useNavigate();

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateDashboard = () => {
    setCurrentPage('Dashboard');
    setDropdownOpen(!dropdownOpen);
    navigate('/dashboard');
  };

  const navigateCreateJob = () => {
    setCurrentPage('Add Job');
    setDropdownOpen(!dropdownOpen);
    navigate('/createjob');
  };

  return (
    <div className='relative'>
      <button
        id='dropdownButton'
        data-dropdown-toggle='dropdown'
        className='text-tertiaryText hover:bg-black/70 rounded-lg text-sm text-center inline-flex items-center'
        type='button'
        aria-haspopup='true'
        aria-expanded='false'
        onClick={handleClick}
      >
        {currentPage}{' '}
        <svg className='w-2.5 h-2.5 ml-2.5 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div className='fixed inset-0 top-12 bg-black opacity-50' onClick={handleClick}></div>
      )}
      <div
        id='dropdown'
        className={` absolute ${
          dropdownOpen ? 'block' : 'hidden'
        } z-10 bg-dominantLight divide-y divide-gray-100 rounded-lg shadow w-44 `}
      >
        <ul
          className='py-2 text-sm text-gray-700 '
          aria-labelledby='dropdownDefaultButton'
        >
          <DropDownItem label='Dashboard' cb={navigateDashboard}/>
          <DropDownItem label='Add Job' cb={navigateCreateJob}/>
          <DropDownItem label='Sign out' cb={()=>navigate('/')}/>
          
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
