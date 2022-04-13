import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import GuardedComponent from './components/GuardedComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<GuardedComponent component={<Profile/>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
