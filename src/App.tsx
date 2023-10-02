import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './main/dashboard/Dashboard.tsx';
import CreateJob from './main/createJob/CreateJob.tsx';

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
