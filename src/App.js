import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/Components/NavBar';
import Contact from '../src/Components/Contact';
import Home from '../src/Components/Home';
import Projects from '../src/Components/Projects';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Services from './Components/Services';
import About from './Components/About'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/services" component={Services}/>
      <Route path="/about" component={About}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
