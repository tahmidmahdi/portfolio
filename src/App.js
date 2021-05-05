import './App.css';
import MainNav from './component/MainNav/MainNav';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
// import Particles from 'react-particles-js';
import "aos/dist/aos.css";
import RecentProjects from './component/RecentProjects/RecentProjects';
import Blogs from './component/Blogs/Blogs';
import Contract from './component/Contract/Contract';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';



function App() {
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (

    <Router>
      {
        spinner && <Loader className="loader"
          type="Bars"
          color="#56FFDA"
          height={100}
          width={100}
          timeout={4000} //3 secs

        />
      }
      { !spinner && 
        <Switch>
          <Route exact path="/">
            {
              spinner && <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            }
            <MainNav></MainNav>
            <Home>
            </Home>
            <About></About>
            <RecentProjects></RecentProjects>
            <Blogs></Blogs>
            <Contract></Contract>
          </Route>
        </Switch>}
    </Router>
  );
}

export default App;
