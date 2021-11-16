import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/HomePage"
import Login from "./pages/LoginPage";
import CreateCanvas from "./pages/CreateCanvasPage"
import Register from "./pages/RegistrationPage";
import Nav from './components/Nav/Nav';
import './App.css'

const App = () => {
  const [isLoggedIn] = useState(window.localStorage.getItem("token"))

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Router path="/register">
            {/* {isLoggedIn ? <Register /> : <Login />} */}
            <Register />
          </Router>
          <Router path="/createCanvas">
            {isLoggedIn ? <CreateCanvas /> : <Login />}
          </Router>
          <Router path="/home">
            {isLoggedIn ? <Home /> : <Login />}
          </Router>
          <Router path="/">
            {isLoggedIn ? <Home /> : <Login />}
          </Router>
        </Switch>
      </div>
    </Router>

  );
}
export default App;