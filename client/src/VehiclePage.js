import React from "react";
import {useState, useEffect} from "react"
import CustomerList from  "./CustomerList.js"
import {Routes, Route} from "react-router-dom"



function VehiclePage(){

const [clients, setClients] = useState([])

useEffect(() => {

    fetch("/clients")
    .then(resp => resp.json())
    .then(setClients)
}, [])




return(
    <>
  <Routes>
    <Route path = "/" element={
        <CustomerList
        clients = {clients}
        />
    }/>
    
  </Routes>  
    
    
    </>

    )
}


export default VehiclePage