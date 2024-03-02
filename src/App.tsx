import React from 'react';
import './App.css';
// core styles are required for all packages
import '@mantine/core/styles.css';
import LandingPage from './layouts/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
