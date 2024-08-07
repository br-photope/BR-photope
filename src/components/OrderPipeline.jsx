import React, { useRef } from 'react'
import "./OrderPipeline.css";
import { useContext } from 'react';
import { CustomersDataContext } from '../store/CustomersData';
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react';


export default function OrderPipeline() {

  const importedCustomersDataContext = useContext(CustomersDataContext);

  
  function resetSerialNumber(data, serialNumber) {
    let newData = data; // Make a copy of the data array
    for (let i = serialNumber; i < newData.length; i++) {
      newData[i].serialNumber -= 1;
    }
    // console.log(newData);
    return newData;
  }
  
  const handleClickDelete = (item) => {
    let toBeReduced = item.corderStatus;
    importedCustomersDataContext.setCustomersData(resetSerialNumber(importedCustomersDataContext.customersData, item.serialNumber));
    importedCustomersDataContext.setCustomersData(importedCustomersDataContext.customersData.filter(element => element !== item));


    //updating countArr
    var arrTemporary = importedCustomersDataContext.countArr;
    for(var i=0; i<importedCustomersDataContext.phaseArr.length; i++)
    {
      if(importedCustomersDataContext.phaseArr[i] === toBeReduced)
      {
        arrTemporary[i] -= 1;
        break;
      }
    }
    importedCustomersDataContext.setCountArr(arrTemporary);
    toBeDecreased = "";

    
  }


  
  const [nameEdit, setNameEdit]= useState("Name");
  const [mobileEdit, setMobileEdit] = useState("xxxxxxxxxx");
  const [orderStatusEdit, setOrderStatusEdit] = useState("Order Status");
  const [advancePaymentEdit, setAdvancePaymentEdit] = useState("xxxxx");
  const [discountEdit, setDiscountEdit] = useState("xxxx");



  const [userDataToEdit, setUserDataToEdit] = useState();

  let [toBeDecreased, setToBeDecreased] = useState("");
  const handleClickEdit = (item2) => {
    setUserDataToEdit(item2);
    setNameEdit(item2.cname);
    setMobileEdit(item2.cmobile);
    setOrderStatusEdit(item2.corderStatus);
    setToBeDecreased(item2.corderStatus);
    setAdvancePaymentEdit(item2.cadvancePayment);
    setDiscountEdit(item2.cdiscount);
  }

  const handleClickSave = () => {
    let toBeIncreased = orderStatusEdit;


    const newData = {serialNumber: userDataToEdit.serialNumber, corderNo: userDataToEdit.corderNo, cname: nameEdit, cmobile: mobileEdit, corderStatus: orderStatusEdit, cadvancePayment: advancePaymentEdit, cdiscount: discountEdit, cprice: userDataToEdit.cprice, cdate: userDataToEdit.cdate}

    let newCustomerArr = [];
    for(let i=1; i<=importedCustomersDataContext.customersData.length; i++)
    {
      if(i === newData.serialNumber)
      {
        newCustomerArr.push(newData);
      }
      else
      {
        newCustomerArr.push(importedCustomersDataContext.customersData[i-1]);
      }
    }
    importedCustomersDataContext.setCustomersData(newCustomerArr);

    
    setUserDataToEdit();
    setNameEdit("Name");
    setMobileEdit("");
    setOrderStatusEdit("");
    setAdvancePaymentEdit("");
    setDiscountEdit("");


      //updating countArr
      var arrTemporary = importedCustomersDataContext.countArr;
      for(var i=0; i<importedCustomersDataContext.phaseArr.length; i++)
      {
        if(importedCustomersDataContext.phaseArr[i] === toBeDecreased)
        {
          arrTemporary[i] -= 1;
        }
        else if(importedCustomersDataContext.phaseArr[i] === toBeIncreased)
        {
          arrTemporary[i] += 1;
        }
      }
      importedCustomersDataContext.setCountArr(arrTemporary);
      toBeDecreased = "";
      toBeIncreased = "";


      //totalCollection updation
      let sum =0;
      for(var i=0; i<importedCustomersDataContext.customersData.length; i++)
      {
        sum = sum + importedCustomersDataContext.customersData[i].cprice;
      }
      importedCustomersDataContext.setTotalCollection(sum);

      
  }



  const handleChangeName = (event) => {
    setNameEdit(event.target.value);
  }
  
  const handleChangeMobile = (event) => {
    setMobileEdit(event.target.value);
  }
  
  const handleChangeOrderStatus = (event) => {
    setOrderStatusEdit(event.target.value);
  }

  
  const handleChangeAdvancePayment = (event) => {
    setAdvancePaymentEdit(event.target.value);
  }

  const handleChangeDiscount = (event) => {
    setDiscountEdit(event.target.value);
  }




  return (
    <>
      <div id='idop6'>
        <div id='idop7'>
          
            <p className='cop1' id='idop8' onChange={handleChangeName}>
              {nameEdit}
            </p>
            
              <input type="number" className='cop1' value={mobileEdit} placeholder="xxxxxxxxxx" onChange={handleChangeMobile}/>
              
              <select name="" className='cop1' id="dd1" onChange={handleChangeOrderStatus}>
                <option>{orderStatusEdit}</option>
                <option value="New Customers">New Customers</option>
                <option value="New Orders">New Order</option>
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
              
              <input type="number" className='cop1' value={advancePaymentEdit} placeholder="xxxxx" onChange={handleChangeAdvancePayment}/>

              <input type="number" className='cop1' value={discountEdit} placeholder="xxxxx" onChange={handleChangeDiscount}/>

              <button type="submit" className='cop1' onClick={handleClickSave}>Save</button>

        </div>
      </div>


      <div id='idop0'>
        <div id='idop1'>
          <table id='idop4'>
            <thead>
              <tr id='idop3'>
                <th id='idop5'>Edit</th>
                <th id='idop5'>Delete</th>
                <th id='idop5'>Sr No.</th>
                <th>Order No.</th>
                <th>Customer Name</th>
                <th>Mobile No.</th>
                <th>Order Status</th>
                <th>Advance Payment</th>
                <th>Discount</th>
                <th>Total Bill</th>
                <th>Date</th>
              </tr>
            </thead>

              {importedCustomersDataContext.customersData.length ===0 ? <h2>No items to display</h2> : null }
            <tbody>

              {importedCustomersDataContext.customersData.map((item) => (
                  <tr key={`${item.serialNumber}-${item.corderNo}-${item.cname}-${item.cmobile}`}>
                    <td id='idop5' onClick={() => handleClickEdit(item)}><FiEdit /></td>
                    <td id='idop5' onClick={() => handleClickDelete(item)}><MdOutlineDelete /></td>
                    <td id='idop5'>{item.serialNumber}</td>
                    <td>{item.corderNo}</td>
                    <td>{item.cname}</td>
                    <td>{item.cmobile}</td>
                    <td>{item.corderStatus}</td>
                    <td>{item.cadvancePayment}</td>
                    <td>{item.cdiscount}</td>
                    <td>{item.cprice}</td>
                    <td>{item.cdate}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>





    </>
  )
}
