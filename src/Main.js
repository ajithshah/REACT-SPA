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

const Main = () => {
  const users = [
    { id: '1', firstName: 'Robin', lastName:"Rab" },
    { id: '2', firstName: 'Sarah', lastName:"Sar" },
  ];

  return (
    <HashRouter>
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/stuff">Stuff</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/profile/name">profiles</NavLink></li>
      </ul>
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/stuff" element={<Stuff/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/name" element={<Profile users={users}/>}/>
        <Route path="/profile/name/:slug" element={<Detail />}></Route>
      </Routes>
      </div>
    </div>
  </HashRouter>
  );
}
 
export default  Main;
