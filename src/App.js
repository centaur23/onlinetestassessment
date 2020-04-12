import React from 'react';
import TestView from '../src/components/TestView';
import Login from './components/Login';
import PublicRoute from '../src/components/routes/PublicRoute';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute exact path="/">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/test">
            <TestView />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
