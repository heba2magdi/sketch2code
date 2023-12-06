import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import SignupLogin from './components/LoginSignup/SignupLogin';
import Home from './components/LoginSignup/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<SignupLogin />} />    
    
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
