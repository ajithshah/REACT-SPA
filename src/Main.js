import React from "react";
import {
  Route,
  NavLink,
  Routes,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Profile from "./profile";
import Detail from "./[id]";
import Error from "./Error";

import { Grid } from "@mui/material"

const Main = () => {
  const users = [
    { id: '1', firstName: 'Robin', lastName:"Rab" },
    { id: '2', firstName: 'Sarah', lastName:"Sar" },
  ];

  return (
  <Grid container spacing={2}>
  <HashRouter>
    <Grid item xs={2}>
      <ul className="header">
        <NavLink exact to="/"><img className="logo" src="./logo.svg" alt="hi"/></NavLink>
        <li><NavLink exact to="/"><img src="./cart.svg"  alt="cart"/>Order</NavLink></li>
        <li><NavLink exact to="/"><img src="./cart.svg"  alt="cart"/>Staff</NavLink></li>
        <li><NavLink to="/stuff"><img src="./cart.svg"  alt="cart"/>Customer</NavLink></li>
        <li><NavLink to="/contact"><img src="./cart.svg"  alt="cart"/>Product</NavLink></li>
        <li><NavLink to="/profile/name"><img src="./cart.svg"  alt="cart"/>Routes & Driver</NavLink></li>
        <li><NavLink to="/profile/name"><img src="./cart.svg"  alt="cart"/>Dispatch</NavLink></li>
        <li><NavLink to="/profile/name"><img src="./cart.svg"  alt="cart"/>Report</NavLink></li>
      </ul>
    </Grid>
    <Grid item xs={10}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/stuff" element={<Stuff/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/name" element={<Profile users={users}/>}/>
        <Route path="/profile/name/:slug" element={<Detail />}></Route>
        <Route element={<Error />}></Route>
      </Routes>
    </Grid>
    </HashRouter>
  </Grid>
  );
}
 
export default  Main;
