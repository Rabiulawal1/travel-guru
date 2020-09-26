import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Mainbody from './Component/Home/Mainbody/Mainbody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoxbazarBooking from './Component/Home/CoxbazarBooking/CoxbazarBooking';
import SreemongolBooking from './Component/Home/SreemongolBooking/SreemongolBooking';
import SundorbonBooking from './Component/Home/SundorbonBooking/SundorbonBooking';

import Login from './Component/Home/Login/Login';
import PrivateRoute from './Component/Home/PrivateRoute/PrivateRoute';
import Coxhotel from './Component/Home/Coxhotel/Coxhotel';
import Sunhotel from './Component/Home/Sunhotel/Sunhotel';
import Sreehotel from './Component/Home/Sreehotel/Sreehotel';



export const userContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser, setloggedInUser]} >
      
      <Router>
         <h2>email: {loggedInUser.email}</h2>
      
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/CoxbazarBooking">
            <CoxbazarBooking></CoxbazarBooking>            
          </Route>
          <Route path="/SreemongolBooking">
            <SreemongolBooking></SreemongolBooking>                   
          </Route>          
          <Route path="/SundorbonBooking">
            <SundorbonBooking></SundorbonBooking>                   
          </Route>                   
          <Route path="/Coxhotel">
            <Coxhotel></Coxhotel>
            </Route>          
          <Route path="/Sreehotel">
            <Sreehotel></Sreehotel>
          </Route>
          <Route path="/Sunhotel">
           <Sunhotel></Sunhotel>
          </Route>  
          <Route>
            <Login></Login>
          </Route>      
        </Switch>
         
      </Router>
      
      
        
    </userContext.Provider>
  );
}

export default App;
