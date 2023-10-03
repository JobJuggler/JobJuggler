import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs } from '../../state/reducers/jobSlice';
import { Job } from '../../../global/types';

type CardParams = {
  job: Job;
};

const Card: React.FC<CardParams> = ({ job }) => {
  
  return (
    <div className='first:mt-4 last:mb-4 flex flex-col mx-4 my-2 px-2 py-1 border-2 rounded-xl'>
      <div className='text-center'>{'Company: ' + job.company}</div>
      <div>{'Title: ' + job.jobtitle}</div>
      <div>{'Location: ' + job.joblocation}</div>
      <div>{'Status: ' + job.jobstatus}</div>
    </div>
  );
};

export default Card;
