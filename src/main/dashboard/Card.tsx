import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs } from '../../state/reducers/jobSlice';
import { Job } from '../../../global/types'

type CardParams = {
  job: Job;
};

const Card: React.FC<CardParams> = ({ job }) => {
  const arr: React.JSX.Element[] = [];

  console.log(job);
  arr.push(<h1>{job.company}</h1>);
  arr.push(<h1>{job.jobtitle}</h1>);
  arr.push(<h1>{job.joblocation}</h1>);
  arr.push(<h1>{job.jobstatus}</h1>);

  return <div>{arr}</div>;
};

export default Card;
