import React from "react";
import {useState, useEffect} from "react"
import CustomerList from  "/home/hitstixx/code/vehicle-project/client/src/components/CustomerList.js"
import {Routes, Route} from "react-router-dom"
import CustomerForm  from "/home/hitstixx/code/vehicle-project/client/src/components/CustomerForm.js";
import EditCustomerForm from "./components/EditCustomer";
import VehicleList from "./components/VehicleList";

function VehiclePage(){

const [clients, setClients] = useState([])
const [vehicles, setVehicles] = useState([])

useEffect(() => {

    fetch("/clients")
    .then(resp => resp.json())
    .then(setClients)
}, [])

useEffect(() => {

  fetch("/vehicles")
  .then(resp => resp.json())
  .then(setVehicles)
}, [])


const handleNewCustomer = (newCustomer) => {
  setClients(newCustomer, ...clients)
}

const updateCustomer = (updatedCustomer) => setClients(current => {
  return current.map(client => {
    if(client.id === updateCustomer.id){
      return updatedCustomer
    }else{
      return client
    }
    })
  })

return(
    <>
      <Routes>
    <Route path = "/" element={
        <VehicleList
        vehicles = {vehicles}
        />
    }/>
    
  </Routes> 
  <Routes>
    <Route path = "/customers" element={
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
  <Routes>
    <Route path = "customers/:id/edit" element ={
        <EditCustomerForm
        clients = {clients}
        />
    }/>
    
  </Routes>  
    
    
    </>

    )
}


export default VehiclePage