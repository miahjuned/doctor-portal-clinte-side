import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Appointment from './pages/Home/Appointment/Appointment';

const App = () => {
  return (
    <Router>

      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">

          </Route>
          <Route path="Appointment">
            <Appointment></Appointment>
          </Route>
      </Switch>
      
    </Router>
  );
}
export default App;
