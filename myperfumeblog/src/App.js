
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import SignUp from './signUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


import VerifyCode from './verifyCode';


function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />
            <SignUp />
        <div className='content'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/verifyCode" element={<VerifyCode />} />
          </Routes>
        </div>
      </div>
    
    </Router>
  );
}

export default App;
