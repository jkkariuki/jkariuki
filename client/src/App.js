import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";



const App = () =>
<Router>
  <div>

    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/portfolio" component={Projects} />
    <Route exact path="/services" component={Services} />

    </Switch>

    
  </div>
</Router>;

export default App;
