import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DropDown: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('Navigate');

  const navigate = useNavigate();

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const navigateDashboard = () => {
    setCurrentPage('Dashboard');
    navigate('/');
  }

  const navigateCreateJob = () => {
    setCurrentPage('Add Job');
    navigate('createjob');
  }

  return (
    <div className=''>
      <button 
        id='dropdownButton' 
        data-dropdown-toggle='dropdown' 
        className='text-tertiaryText hover:bg-black/70 rounded-lg text-sm text-center inline-flex items-center' 
        type='button' 
        aria-haspopup='true' 
        aria-expanded='false' 
        onClick={handleClick}
      >
        {currentPage} {' '} 
        <svg className='w-2.5 h-2.5 ml-2.5 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4'/>
        </svg>
      </button>
      <div id='dropdown' className={`${dropdownOpen ? 'block' : 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}>
        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={navigateDashboard}>Dashboard</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={navigateCreateJob}>Add Job</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
        </li>
    </ul>
      </div>
    </div>
  )
}

export default DropDown;
