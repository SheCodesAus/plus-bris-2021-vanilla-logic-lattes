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
          <Route path="/register" >
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/createcanvas">
            {isLoggedIn ? <CreateCanvas /> : <Login />}
          </Route>
          <Route path="/canvas/:id">
            {isLoggedIn ? <CanvasPage /> : <Login />}
          </Route>
          <Route path="/home">
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/">
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}
export default App;