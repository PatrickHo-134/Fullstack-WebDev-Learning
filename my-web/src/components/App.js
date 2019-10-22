import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
// import Login from "./components/Login";
import UserRegister from "./register";
// import Profile from "./components/Profile";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <div className="container">
            <Route exact path="/register" component={UserRegister} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/profile" component={Profile} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
