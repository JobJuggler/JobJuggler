import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs } from '../../state/reducers/jobSlice';

type params = {};

const loadJobsReact = async (dispatch: any) => {
  const jobs: any = await fetch('/api/apps');
  const jobsJSON = await jobs.json();

  dispatch(loadJobs(jobsJSON));
};

const Dashboard: React.FC<params> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadJobsReact(dispatch);
  }, []);

  const jobList = useSelector((state: any) => state.jobSlice.jobs);

  console.log(jobList);

  return <div></div>;
};

export default Dashboard;
