import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard';
import CreateJob from './main/createJob/CreateJob';
import Login from './main/login/Login';
import SignUp from './main/login/SignUp';
import NavBar from './main/navBar/NavBar.tsx';

function App() {

  const shouldDisplayNavBar = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <BrowserRouter>
      {shouldDisplayNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/createjob' element={<CreateJob />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
