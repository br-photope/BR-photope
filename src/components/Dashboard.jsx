import React, { useContext, useEffect } from 'react'
import Boxes from '../components/Boxes.jsx';
import {useState} from 'react'; 
import "./Dashboard.css";
import { CustomersDataContext } from '../store/CustomersData.jsx';

export default function Dashboard() {

    const importedCustomersDataContext = useContext(CustomersDataContext);
    
  


  return (
    <>
      <div id='iddb2'>

        <div className='boxes' id='iddb1'>
          <p>Total Business: {importedCustomersDataContext.totalCollection}</p>
        </div>
    
    
        <div className='boxes'>
            <Boxes heading="New Customers" value={importedCustomersDataContext.countArr[3]}/>
            <Boxes heading="New Orders" value={importedCustomersDataContext.countArr[4]}/>
            <Boxes heading="Shoot Done" value={importedCustomersDataContext.countArr[9]}/>
            <Boxes heading="Selection Done" value={importedCustomersDataContext.countArr[8]}/>
            <Boxes heading="Editing Done" value={importedCustomersDataContext.countArr[2]}/>
            <Boxes heading="Out for print" value={importedCustomersDataContext.countArr[5]}/>
            <Boxes heading="Ready for pickup" value={importedCustomersDataContext.countArr[7]}/>
            <Boxes heading="Delivered" value={importedCustomersDataContext.countArr[1]}/>
            <Boxes heading="Delay Orders" value={importedCustomersDataContext.countArr[0]}/>
            <Boxes heading="Pending Payments" value={importedCustomersDataContext.countArr[6]}/>
            <Boxes heading="All Customers" value={importedCustomersDataContext.customersData.length}/>
            <Boxes heading="Settings" value="NA"/>
        </div>
    

      </div>
    </>
  )
}
