import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputField from './InputField';
import NavBar from '../navBar/NavBar';

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  
  // input field states
  const [company, setCompany] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [companyContact, setCompanyContact] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [interviewQuestions, setInterviewQuestions] = useState('');
  const [applicationStatus, setApplicationStatus] = useState('');
  const [jobURL, setJobURL] = useState('');
  const [schedule, setSchedule] = useState('');
  const [remote, setRemote] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [salary, setSalary] = useState('');
  const [notes, setNotes] = useState('');

  const toDashboard = () => {
    navigate('/');
  };

  const onCreateClicked = async () => {
    try {
      const response = await axios.post<undefined>('/api/apps', {
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
        notes,
      });
      
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
    <div className='flex flex-col p-4'>
        <h1 className='text-2xl text-center'>Create a new application!</h1>

        <InputField placeholder='Company Name' setVariable={setCompany}/>
        <InputField placeholder='Company URL' setVariable={setCompanyURL}/>
        <InputField placeholder='Company Contact' setVariable={setCompanyContact}/>
        <InputField placeholder='Job Title' setVariable={setJobTitle}/>
        <InputField placeholder='Location' setVariable={setJobLocation}/>
        <InputField placeholder='Job Description' setVariable={setJobDescription}/>
        <InputField placeholder='Job Status' setVariable={setJobStatus}/>
        <InputField placeholder='Interview Questions' setVariable={setInterviewQuestions}/>
        <InputField placeholder='Application Status' setVariable={setApplicationStatus}/>
        <InputField placeholder='Job Listing URL' setVariable={setJobURL}/>
        <InputField placeholder='Full-Time / Part-Time' setVariable={setSchedule}/>
        <InputField placeholder='On-Site / Remote' setVariable={setRemote}/>
        <InputField placeholder='Date Applied (MM-DD-YYYY)' setVariable={setDateApplied}/>
        <InputField placeholder='Interview Date (MM-DD-YYYY)' setVariable={setInterviewDate}/>
        <InputField placeholder='Salary' setVariable={setSalary}/>
        <InputField placeholder='Notes' setVariable={setNotes}/>
        

        <button
          onClick={() => {
            onCreateClicked();
          }}
          className='p-1 m-0.5 border border-black bg-secondary rounded-md'
        >
          Create Application
        </button>
      </div>
  );
};

export default CreateJob;
