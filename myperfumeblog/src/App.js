

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import SignUp from './signUp';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


import VerifyCode from './verifyCode';
import BlogList from './BlogList';


function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />
        
        <div className='content'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/verifyCode" element={<VerifyCode />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/blogs" element={<blogs />} />
          </Routes>
        </div>
      </div>
    
    </Router>
  );
}

export default App;
