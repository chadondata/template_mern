import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import BasicList from './components/basic-list.component';
import CreateBasic from './components/create-basic.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={BasicList} />
        <Route path="/create" component={CreateBasic} />
      </div>
    </Router>
  )
}

export default App;
