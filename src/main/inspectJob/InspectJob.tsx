import React, { useEffect } from 'react';
// import { editJobs } from '../../state/reducers/jobSlice';
import type { Job } from '../../../global/types';
//import { useAppDispatch, useAppSelector } from '../../state/hooks/hooks';
import Field from './Field';

type inspectParams = {
  job: Job;
};

// const editJobsReact = async (dispatch: any) => {

//   dispatch(editJobs(jobsJSON));
// };

const Inspect: React.FC<inspectParams> = ({ job }) => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   editJobsReact(dispatch);
  // }, []);

  const fields: Array<React.JSX.Element> = [];
  for (const field in job) {
    if (job[field] !== undefined) {
      fields.push(<Field name={field} contents={job[field]} />);
    }
  }

  return (
    <div className='flex flex-col p-4'>
      <h1  className='text-2xl text-center'>Job Viewer</h1>
      {fields}
    </div>
  );
};

export default Inspect;
