import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import SignupLogin from './components/LoginSignup/SignupLogin';
import Home from './components/LoginSignup/home';
import Account from './components/LoginSignup/account';
import NavBar from './components/LoginSignup/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProject from './components/LoginSignup/MyProject';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    
      <Router>
      <Routes>
        
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<SignupLogin />} />    
      <Route path="/account" element={<Account />} />
      <Route path="/myproject" element={<MyProject />} />    

      </Routes>
    </Router>
     </div>
  );
}

export default App;
