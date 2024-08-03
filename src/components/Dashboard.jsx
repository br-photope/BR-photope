import React from 'react'
import Boxes from '../components/Boxes.jsx';
import {useState} from 'react'; 
import "./Dashboard.css";

export default function Dashboard() {

    const handleOnChange = (event)=>{
        setOption(event.target.value);
        console.log(option);
      }
    
    
      const handleChange = (event)=>{
        setText(event.target.value);
        console.log(text);
      }
    
      const handleOnCLick = ()=>{
        switch(option){
    
          case "New Customer":
            setValue1(text);
            break;
    
          case "New Orders":
            setValue2(text);
            break;
    
          case "Shoot Done":
            setValue3(text);
            break;
        
          case "Selection Done":
            setValue4(text);
            break;
    
          case "Editing Done":
            setValue5(text);
            break;
    
          case "Out for print":
            setValue6(text);
            break;
            
          case "Ready for pickup":
            setValue7(text);
            break;
    
          case "Delivered":
            setValue8(text);
            break;
    
          case "Delay Orders":
            setValue9(text);
            break;
            
          case "Pending Payments":
            setValue10(text);
            break;
    
          case "All Customers":
            setValue11(text);
            break;
    
          default:
            
    
    
        }
      }
    
    
      const [option, setOption] = useState("Options");
      const [text, setText] = useState("");
    
      const [value1, setValue1] = useState("0");
      const [value2, setValue2] = useState("0");
      const [value3, setValue3] = useState("0");
      const [value4, setValue4] = useState("0");
      const [value5, setValue5] = useState("0");
      const [value6, setValue6] = useState("0");
      const [value7, setValue7] = useState("0");
      const [value8, setValue8] = useState("0");
      const [value9, setValue9] = useState("0");
      const [value10, setValue10] = useState("0");
      const [value11, setValue11] = useState("0");

  return (
    <>
        <div id='boxes'>
            <Boxes heading="New Customer" value={value1}/>
            <Boxes heading="New Orders" value={value2}/>
            <Boxes heading="Shoot Done" value={value3}/>
            <Boxes heading="Selection Done" value={value4}/>
            <Boxes heading="Editing Done" value={value5}/>
            <Boxes heading="Out for print" value={value6}/>
            <Boxes heading="Ready for pickup" value={value7}/>
            <Boxes heading="Delivered" value={value8}/>
            <Boxes heading="Delay Orders" value={value9}/>
            <Boxes heading="Pending Payments" value={value10}/>
            <Boxes heading="All Customers" value={value11}/>
            <Boxes heading="Settings" value="NA"/>
        </div>
    
        <select name="" id="dd1" onChange={handleOnChange}>
          <option value="" defaultValue>{option}</option>
          <option value="New Customer">New Customer</option>
          <option value="New Orders">New Orders</option>
          <option value="Shoot Done">Shoot Done</option>
          <option value="Selection Done">Selection Done</option>
          <option value="Editing Done">Editing Done</option>
          <option value="Out for print">Out for print</option>
          <option value="Ready for pickup">Ready for pickup</option>
          <option value="Delivered">Delivered</option>
          <option value="Delay Orders">Delay Orders</option>
          <option value="Pending Payments">Pending Payments</option>
          <option value="All Customers">All Customers</option>
        </select>

        <input type="number" onChange={handleChange}/>

        <input type="submit" value="Submit" onClick={handleOnCLick} />
    
    
    </>
  )
}
