import './App.css';

import Navbar from "../components/Navbar.jsx";
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CustomersDataContext } from '../store/CustomersData.jsx';

function App() {

  const [customersData, setCustomersData] = useState( [
    {serialNumber:1, corderNo:"101", cname:"vaibhav s kankanwadi", cmobile:"11111111101", corderStatus:"New", cadvancePayment:"2", cdiscount:"1", cprice:"2000", cdate:"14/12/2024"},
    {serialNumber:2, corderNo:"102", cname:"mayur", cmobile:"1111111112", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:3, corderNo:"103", cname:"akshay", cmobile:"1111111113", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:4, corderNo:"104", cname:"gomya", cmobile:"1111111114", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:5, corderNo:"105", cname:"prathmesh", cmobile:"1111111115", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:6, corderNo:"106", cname:"kaustubh", cmobile:"11111111116", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:7, corderNo:"107", cname:"pratik", cmobile:"1111111117", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:8, corderNo:"108", cname:"vedant", cmobile:"1111111118", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:9, corderNo:"109", cname:"satyam", cmobile:"1111111119", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:10, corderNo:"110", cname:"adnan", cmobile:"1111111110", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:11, corderNo:"111", cname:"ankit", cmobile:"1111111111", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:12, corderNo:"112", cname:"mahesh", cmobile:"1111111112", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:13, corderNo:"113", cname:"vivek", cmobile:"11111111113", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:14, corderNo:"114", cname:"sushil", cmobile:"1111111114", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:15, corderNo:"115", cname:"yash", cmobile:"1111111115", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:16, corderNo:"116", cname:"prasanna", cmobile:"1111111116", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:17, corderNo:"117", cname:"parvez", cmobile:"1111111117", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:18, corderNo:"118", cname:"rohit", cmobile:"1111111118", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:19, corderNo:"119", cname:"swaraj", cmobile:"1111111119", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
    {serialNumber:20, corderNo:"120", cname:"sujal", cmobile:"1111111120", corderStatus:"New Customers", cadvancePayment:"0", cdiscount:"0", cprice:"1000", cdate:"14/12/2024"},
  ] );
    

  return (
    <>
      <CustomersDataContext.Provider value={ {customersData, setCustomersData} }>

        <Navbar/>

        <Outlet/>

      </CustomersDataContext.Provider>
    </>
  );
}

export default App;
