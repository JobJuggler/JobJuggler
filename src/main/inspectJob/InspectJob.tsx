import React, { useEffect } from 'react';
// import { editJobs } from '../../state/reducers/jobSlice';
import type { Job } from '../../../global/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks/hooks';
import Field from './Field';
import { useNavigate } from 'react-router-dom';

type params = {};

const Inspect: React.FC<params> = () => {
  const navigate = useNavigate();
  const jobList = useAppSelector((state) => state.jobs);
  const currentJob = useAppSelector((state) => state.currentJobID);

  const job = jobList[currentJob];

  const toDashboard = () => {
    navigate('/');
  };

  const fields: Array<React.JSX.Element> = [];
  for (const field in job) {
    if (job[field] !== null) {
      fields.push(<Field name={field} contents={job[field]} />);
    }
  }

  return (
    <div className='flex flex-col h-full'>
      <button
        onClick={() => {
          toDashboard();
        }}
        className='p-1 m-0.5 border border-red bg-secondary rounded-md'
      >
        X
      </button>
      <div className='flex flex-col grow'>{fields}</div>
    </div>
  );
};

export default Inspect;
