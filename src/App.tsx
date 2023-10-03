import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard';
import CreateJob from './main/createJob/CreateJob';
import Login from './main/login/Login';
import NavBar from './main/navBar/NavBar.tsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/createjob' element={<CreateJob />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
