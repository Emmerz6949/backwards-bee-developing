import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
