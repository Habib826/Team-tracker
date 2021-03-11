import React from "react";
import 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Switch,Route,Link}
 from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Notmatch from "./Components/Notmatch/Notmatch";
import TeamDetail from "./Components/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route  path="/home">
            <Home />
            </Route>
            <Route path="/teamDetail/:id">
            <TeamDetail/>
          </Route>
            <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
          <Notmatch></Notmatch>
          </Route>
          <Route path="/team">
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
