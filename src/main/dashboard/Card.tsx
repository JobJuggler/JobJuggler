import React from 'react';
import { Job } from '../../../global/types';

type CardParams = {
  job: Job;
  onClick?: () => void;
};

const Card: React.FC<CardParams> = ({ job, onClick }) => {

  return (
    <button id='CardButton' onClick={onClick} className='bg-secondary first:mt-4 last:mb-4 flex flex-col mx-4 my-2 px-2 py-1 border-color-accent border-1 rounded-xl'>
      <div className='text-center'>{'Company: ' + job.company}</div>
      <div>{'Title: ' + job.jobtitle}</div>
      <div>{'Location: ' + job.joblocation}</div>
      <div>{'Status: ' + job.jobstatus}</div>
    </button>
  );
};

export default Card;
