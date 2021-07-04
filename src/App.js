import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"; 

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */

/*import { Router, Route, Switch } from "react-router-dom"; */
import LandingPage from 'pages/LandingPages';
import Example from "pages/Example";
import NotFound from 'pages/404'
import BreadCrumb from 'pages/BreadCrumb'
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/example" component={Example} />
        <Route exact path="/breadcrumb" component={BreadCrumb} />
        <Route exact path="/404" component={NotFound}/>
      </Router>
    </div>
  );
}

export default App;
