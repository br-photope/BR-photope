import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div id='idnb3'> 
          <div id='idnb4'>
            <p id='logo'></p>
          </div>

          <div id='idnb2'>
              <NavLink to="/dashboard" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Dashboard</NavLink> <br />
              <NavLink to="/newcustomer" className={(e) => {return e.isActive ? "highlight" : "c1"}}>New Customer</NavLink> <br />
              <NavLink to="/orderpipeline" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Order Pipeline</NavLink> <br />
              <NavLink to="/allcustomer" className={(e) => {return e.isActive ? "highlight" : "c1"}}>All Customer</NavLink> <br />
              <NavLink to="/setting" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Settings</NavLink>
          </div>
      </div>
    
    
    
    
    </>
  )
}
