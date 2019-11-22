import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsContainer from './components/ProjectsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ProjectsContainer />
    </div>
  );
}

export default App;
