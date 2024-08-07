import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <div>
            <p id='logo'>

            </p>
        </div>

        <div id='id2'>
            <NavLink to="/dashboard" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Dashboard</NavLink>
            <NavLink to="/newcustomer" className={(e) => {return e.isActive ? "highlight" : "c1"}}>New Customer</NavLink>
            <NavLink to="/orderpipeline" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Order Pipeline</NavLink>
            <NavLink to="/allcustomer" className={(e) => {return e.isActive ? "highlight" : "c1"}}>All Customer</NavLink>
            <NavLink to="/setting" className={(e) => {return e.isActive ? "highlight" : "c1"}}>Settings</NavLink>
        </div>
    
    
    
    
    
    </>
  )
}
