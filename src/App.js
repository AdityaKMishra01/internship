import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/register';
import AdminPanel from './pages/Adminpanel';

const App = () => {
  return (
    <Router>
      <div style={styles.navContainer}>
        <Link to="/register" style={styles.link}>Register User</Link>
        <Link to="/admin" style={styles.link}>Admin Panel</Link>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
  },
};

export default App;
