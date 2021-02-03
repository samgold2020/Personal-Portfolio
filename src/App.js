import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/home'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
		Aos.init({});
	}, []);

  return (
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  );
}

export default App;
