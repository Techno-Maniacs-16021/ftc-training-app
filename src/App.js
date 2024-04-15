import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteNav2 from './components/common/SiteNav2';
import SiteFooter from './components/common/SiteFooter';

import Homepage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

function App() {
  return (
    <div className="my-div">
      <SiteNav />
      <SiteNav2 />
      <Routes>
        <Route path='*' element={<Homepage />} />
        <Route paht='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
