import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/backwards-bee-developing/" component={Home} />
        <Route exact path="/backwards-bee-developing/about" component={About} />
        <Route exact path="/backwards-bee-developing/portfolio" component={Portfolio} />
        <Route path="/backwards-bee-developing/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
