import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import axios from 'axios';

const CreateJob: React.FC = () => {

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // TypeScript typing
  interface CreateJobResponse {
    company: String;
    companyURL: String;
    companyContact: String;
    jobTitle: String;
    jobLocation: String;
    jobDescription: String;
    jobStatus: String;
    interviewQuestions: String;
    applicationStatus: String;
    jobURL: String;
    schedule: String;
    remote: String;
    dateApplied: Date;
    interviewDate: Date;
    salary: Number;
    notes: String;
  }

  // input field states
  const [ company, setCompany ] = useState('');
  const [ companyURL, setCompanyURL ] = useState('');
  const [ companyContact, setCompanyContact ] = useState('');
  const [ jobTitle, setJobTitle ] = useState('');
  const [ jobLocation, setJobLocation ] = useState('');
  const [ jobDescription, setJobDescription ] = useState('');
  const [ jobStatus, setJobStatus ] = useState('');
  const [ interviewQuestions, setInterviewQuestions ] = useState('');
  const [ applicationStatus, setApplicationStatus ] = useState('');
  const [ jobURL, setJobURL ] = useState('');
  const [ schedule, setSchedule ] = useState('');
  const [ remote, setRemote ] = useState('');
  const [ dateApplied, setDateApplied ] = useState('');
  const [ interviewDate, setInterviewDate ] = useState('');
  const [ salary, setSalary ] = useState('');
  const [ notes, setNotes ] = useState('');

  const toDashboard = () => {
    navigate('/')
  }
  
  const onCreateClicked = async () => {
    try {
      console.log('onCreateClicked initiated')
      const response = await axios.post<CreateJobResponse>(
        '/api/apps',
        {
          company,
					companyURL,
					companyContact,
					jobTitle,
					jobLocation,
					jobDescription,
					jobStatus,
					interviewQuestions,
					applicationStatus,
					jobURL,
					schedule,
					remote,
					dateApplied,
					interviewDate,
					salary,
					notes
        }
      )
        console.log('Response: ', response);
      // not sure how to get rid of this at the moment with types...
      if (response.status === 200) {
        toDashboard();
      } else {
        console.log('Response: ', response);
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col p-5'>

      <h1 className='text-2xl pl-16'>Create a new application!</h1>

      <input 
        type="text" 
        placeholder='Company Name' 
        onChange={(e) => setCompany(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Company URL' 
        onChange={(e) => setCompanyURL(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Company Contact' 
        onChange={(e) => setCompanyContact(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'/>
      <input 
        type="text" 
        placeholder='Job Title' 
        onChange={(e) => setJobTitle(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Location' 
        onChange={(e) => setJobLocation(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Job Description' 
        onChange={(e) => setJobDescription(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Job Status' 
        onChange={(e) => setJobStatus(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Interview Questions' 
        onChange={(e) => setInterviewQuestions(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Application Status' 
        onChange={(e) => setApplicationStatus(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Job Listing URL' 
        onChange={(e) => setJobURL(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Full-Time / Part-Time' 
        onChange={(e) => setSchedule(e.target.value)}
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='On-Site / Remote' 
        onChange={(e) => setRemote(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Date Applied (MM-DD-YYYY)' 
        onChange={(e) => setDateApplied(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Interview Date (MM-DD-YYYY)' 
        onChange={(e) => setInterviewDate(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Salary' 
        onChange={(e) => setSalary(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />
      <input 
        type="text" 
        placeholder='Notes' 
        onChange={(e) => setNotes(e.target.value)} 
        className='w-96 p-1 m-0.5 border border-black'
      />

      <button 
        onClick={() => {onCreateClicked()}}
        className='border border-black w-96'>
        Create Application
      </button>
    </div>
  )
}

export default CreateJob;