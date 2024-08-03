import React, { useState } from 'react';
import "./NewCustomer.css";
import { useRef } from 'react';
import { useContext } from 'react';
import { CustomersDataContext } from '../store/CustomersData';




export default function NewCustomer() {
  
  const importedCustomersDataContext = useContext(CustomersDataContext);

  const mobile = useRef(); 
  const name = useRef();
  const itemName = useRef();
  const quantity = useRef();
  const price = useRef();
  const orderNo = useRef();
  const advancePayment = useRef();
  const discount = useRef();
  // const orderStatus = "New Customer";
  const date = new Date();
  let serialNumber = (importedCustomersDataContext.customersData.length === 0) ? 1 : (importedCustomersDataContext.customersData[importedCustomersDataContext.customersData.length - 1].serialNumber) + 1;
  

  const handleClickAdd = () => {
    const cmobile = mobile.current.value;
    const cname = name.current.value;
    const citemName = itemName.current.value;
    const cquantity = quantity.current.value;
    const cprice = price.current.value;
    const corderNo = orderNo.current.value;
    const cadvancePayment = advancePayment.current.value;
    const cdiscount = discount.current.value;
    const corderStatus = "New Customer";
    const cdate = date.toLocaleDateString('en-GB');
    
    console.log(importedCustomersDataContext.customersData);
    importedCustomersDataContext.setCustomersData( [...importedCustomersDataContext.customersData, {serialNumber, cmobile, cname, citemName, cquantity, cprice, corderNo, cadvancePayment, cdiscount, corderStatus, cdate} ] );
    console.log(importedCustomersDataContext.customersData);

    mobile.current.value = "";
    name.current.value = "";
    itemName.current.value = "";
    quantity.current.value = "";
    price.current.value = "";
    orderNo.current.value = "";
    advancePayment.current.value = "";
    discount.current.value = "";
    serialNumber++;
    
  }

  return (
    <>

  <div id='idnc2'>
      <div className='cnc1'>
        <p>Mobile Number:</p>
        <input type="tel" name="" ref={mobile} id="" className='cnc2' />
      </div>

      <div className='cnc1'>
        <p>Full Name:</p>
        <input type="text" name="" ref={name} id="" className='cnc2' />
      </div>

      <div className='cnc1'>
        <p>Item Name:</p>
        <input type="text" name="" ref={itemName} id="" className='cnc2' />
      </div>

      <div className='cnc4'>
        <p>Quantity:</p>
        <input type="number" name="" ref={quantity} id="" className='cnc3' min="0"/>
      </div>

      <div className='cnc4'>
        <p>Price:</p>
        <input type="number" name="" ref={price} id="" className='cnc3' min="0"/>
      </div>

      <br />

      <div className='cnc4'>
        <p>Order Number:</p>
        <input type="number" name="" ref={orderNo} id="" className='cnc3' min="0"/>
      </div>

      <div className='cnc4' id='idnc4'>
        <p>Advance Payment:</p>
        <input type="number" name="" ref={advancePayment} id="" className='cnc3' min="0"/>
      </div>

      <div className='cnc4' id='idnc4'>
        <p>Discount:</p>
        <input type="number" name="" ref={discount} id="" className='cnc3' min="0"/>
      </div>

      <button type="submit" id='idnc3' onClick={handleClickAdd}>Add</button>
  </div>
    
    
    </>
  )
}
