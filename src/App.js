import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>

      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">

          </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
