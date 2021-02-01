import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Pages/home'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
