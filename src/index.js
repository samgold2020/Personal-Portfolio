import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Pages/home'



ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root')
);


