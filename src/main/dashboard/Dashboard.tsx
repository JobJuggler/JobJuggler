import React, { useEffect } from 'react';
import { loadJobs } from '../../state/reducers/jobSlice';
import type { Job } from '../../../global/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks/hooks';
import Card from './Card';

type props = {
  setShouldDisplayNavBar: (bool: boolean)=>void;
  shouldDisplayNavBar: boolean;
}

const loadJobsReact = async (dispatch: any) => {
  const jobs: Response = await fetch('/api/apps');
  const jobsJSON: Job[] = await jobs.json();

  dispatch(loadJobs(jobsJSON));
};

const Dashboard: React.FC<props> = ({shouldDisplayNavBar, setShouldDisplayNavBar}) => {
  useEffect(()=>{
    if (!shouldDisplayNavBar){
      setShouldDisplayNavBar(true);
    }
  }, []);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadJobsReact(dispatch);
  }, []);

  const jobList = useAppSelector((state) => state.jobs);
  
  const cards = jobList.map<React.JSX.Element>((job, id) => {
    return <Card job={job} id={id} key={id}></Card>;
  });

  return (
    <div className='h-full'>
      <div className='bg-dominant flex flex-col h-full overflow-scroll'>
        <div className='flex flex-col grow'>{cards}</div>
      </div>
    </div>
  );
};

export default Dashboard;
