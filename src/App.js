import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const MainScreen = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>My Application</h2>
    <p>
      &quot;using React for anything is easy&quot;
    </p>
    <br />
    <h3>github.com/JakubKohoutek/react-boilerplate</h3>
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Route path="/" exact component={MainScreen} />
        <Route path="/page1" component={() => null} />
        <Route path="/page2" component={() => null} />
      </div>
    </div>
  </Router>
);

export default App;

