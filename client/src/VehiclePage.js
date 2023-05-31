import React from "react";
import {useState, useEffect} from "react"
import CustomerList from  "/home/hitstixx/code/vehicle-project/client/src/components/CustomerList.js"
import {Routes, Route} from "react-router-dom"
import CustomerForm  from "/home/hitstixx/code/vehicle-project/client/src/components/CustomerForm.js";


function VehiclePage(){

const [clients, setClients] = useState([])

useEffect(() => {

    fetch("/clients")
    .then(resp => resp.json())
    .then(setClients)
}, [])

const handleNewCustomer = (newCustomer) => {
  setClients(newCustomer, ...clients)
}


return(
    <>
  <Routes>
    <Route path = "/" element={
        <CustomerList
        clients = {clients}
        />
    }/>
    
  </Routes>  
  <Routes>
    <Route path = "customers/new" element={
        <CustomerForm
        handleNewCustomer = {handleNewCustomer}
        />
    }/>
    
  </Routes>  
    
    </>

    )
}


export default VehiclePage