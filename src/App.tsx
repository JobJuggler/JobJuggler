import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard.tsx';
import CreateJob from './main/createJob/CreateJob.tsx';
import NavBar from './main/navBar/NavBar.tsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/createjob' element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
