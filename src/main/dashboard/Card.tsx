import React from 'react';
import { Job } from '../../../global/types';
import { useNavigate } from 'react-router-dom';
import { setCurrentJob } from '../../state/reducers/jobSlice';
import { useAppDispatch, useAppSelector } from '../../state/hooks/hooks';

type CardParams = {
  job: Job;
  id: number;
};

const Card: React.FC<CardParams> = ({ job, id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setCurrentJob(id));
    navigate('/inspect');
  };

  return (
    <button
      id='CardButton'
      onClick={onClick}
      className='bg-secondary first:mt-4 last:mb-4 flex flex-col mx-4 my-2 px-2 py-1 border-color-accent border-1 rounded-xl'
    >
      <div className='text-center'>{'Company: ' + job.company}</div>
      <div>{'Title: ' + job.jobtitle}</div>
      <div>{'Location: ' + job.joblocation}</div>
      <div>{'Status: ' + job.jobstatus}</div>
    </button>
  );
};

export default Card;
