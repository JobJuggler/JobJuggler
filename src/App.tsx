import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard';
import CreateJob from './main/createJob/CreateJob';
import Login from './main/login/Login';
import NavBar from './main/navBar/NavBar.tsx';
import Inspect from './main/inspectJob/InspectJob.tsx';

const TestJob = {
  __id: 1234,
  company: 'asdf', 
  jobtitle: 'asdf', 
  joblocation: 'here',
  jobstatus: 'Done', 
  applicationstatus: 'DOne'
}

function App() {
  const renderNavBar = true;

  return (
    <BrowserRouter>
      {renderNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/createjob' element={<CreateJob />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inspectjob' element={<Inspect job={TestJob}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
