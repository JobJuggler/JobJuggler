import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard';
import CreateJob from './main/createJob/CreateJob';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/createjob' element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
