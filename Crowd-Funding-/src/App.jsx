import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import CreateProject from './components/CreateProject';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;