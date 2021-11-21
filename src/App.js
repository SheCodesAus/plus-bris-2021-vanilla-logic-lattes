import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/HomePage"
import Login from "./pages/LoginPage";
import CreateCanvas from "./pages/CreateCanvasPage"
import Register from "./pages/RegistrationPage";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'
import About from "./pages/AboutPage";
import './App.css'
import CanvasPage from './pages/CanvasPage';

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
            <Register />
          </Router>
          <Route path="/about">
            <About />
          </Route>
          <Router path="/createcanvas">
            {isLoggedIn ? <CreateCanvas /> : <Login />}
          </Router>
          <Route path="/canvas/:id">
            <CanvasPage />
          </Route>
          <Router path="/home">
            {isLoggedIn ? <Home /> : <Login />}
          </Router>
          <Router path="/">
            {isLoggedIn ? <Home /> : <Login />}
          </Router>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}
export default App;