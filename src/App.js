import './App.css';
import Intro from './components/Intro';
import Login from './login/signin';
import About from './About/About';

// npm install react-router-dom
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
      
  );
}

export default App;
