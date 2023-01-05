import './App.css';
import Intro from './Homepage/Intro';
import SignIn from './Login/signin';
import SignUp from './Login/signup';
import About from './Homepage/About';
import Demo from './Homepage/Demo';
// npm install react-router-dom
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>
    </div>
      
  );
}

export default App;
