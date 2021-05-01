import './App.css';
import MainNav from './component/MainNav/MainNav';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';


function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/">
            <MainNav></MainNav>
            <Home></Home>
            <About></About>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
