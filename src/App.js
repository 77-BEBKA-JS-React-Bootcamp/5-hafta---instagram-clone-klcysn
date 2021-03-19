import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/users" />
          <Route path="/" exact/>
        </Switch>
    </Router>
  );
}

export default App;