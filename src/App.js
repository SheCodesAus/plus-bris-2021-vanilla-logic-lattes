import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/HomePage"
import Login from "./pages/LoginPage";
import Register from "./pages/RegistrationPage";
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;