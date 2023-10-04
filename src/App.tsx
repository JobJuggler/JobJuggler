import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard';
import CreateJob from './main/createJob/CreateJob';
import Login from './main/login/Login';
import SignUp from './main/login/SignUp';
import NavBar from './main/navBar/NavBar.tsx';
import InspectJob from './main/inspectJob/InspectJob.tsx';
import { useState } from 'react';

function App() {
  const [shouldDisplayNavBar, setShouldDisplayNavBar] = useState(false);

  return (
    <BrowserRouter>
      {shouldDisplayNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<Login shouldDisplayNavBar={shouldDisplayNavBar} setShouldDisplayNavBar={setShouldDisplayNavBar}/>} />
        <Route path='/signup' element={<SignUp shouldDisplayNavBar={shouldDisplayNavBar} setShouldDisplayNavBar={setShouldDisplayNavBar} />} />
        <Route path='/createjob' element={<CreateJob shouldDisplayNavBar={shouldDisplayNavBar} setShouldDisplayNavBar={setShouldDisplayNavBar}/>} />
        <Route path='/dashboard' element={<Dashboard shouldDisplayNavBar={shouldDisplayNavBar} setShouldDisplayNavBar={setShouldDisplayNavBar}/>} />
        <Route path='/inspect' element={<InspectJob shouldDisplayNavBar={shouldDisplayNavBar} setShouldDisplayNavBar={setShouldDisplayNavBar}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
