import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UploadProject from './components/ProjectUpload';
import Dashboard from './components/ProjectDashboard';
import Review from './components/Review';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css'; // Global styles

function App() {
  // State to manage uploaded projects
  const [projects, setProjects] = useState([]);

  // Function to add a new project to the shared state
  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Routes with shared project state */}
            <Route
              path="/projects/upload"
              element={<UploadProject addProject={addProject} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard projects={projects} />}
            />
            <Route path="/review" element={<Review />} />

            {/* Catch-all for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
