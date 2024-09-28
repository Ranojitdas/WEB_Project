import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './styles.css';
import ModuleCard from './components/ModuleCard';
import Progress from './components/Progress';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [modules, setModules] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');

  useEffect(() => {
    if (isLoggedIn) {
      fetchModules();
    }
  }, [isLoggedIn]);

  const fetchModules = async () => {
    const response = await fetch('/api/modules');
    const data = await response.json();
    setModules(data);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setView('dashboard');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">JARVIS 3.0</Navbar.Brand>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          ) : (
            <>
              <Nav.Link href="#login" onClick={() => setView('login')}>Login</Nav.Link>
              <Nav.Link href="#register" onClick={() => setView('register')}>Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>

      <Container className="mt-5">
        {view === 'dashboard' && <Dashboard modules={modules} user={user} />}
        {view === 'login' && <Login setUser={handleLogin} setIsLoggedIn={setIsLoggedIn} />}
        {view === 'register' && <Register setUser={handleLogin} setIsLoggedIn={setIsLoggedIn} />}
      </Container>
    </div>
  );
}

export default App;
