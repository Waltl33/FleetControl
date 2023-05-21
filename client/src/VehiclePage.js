import React from "react";
import {useState, useEffect} from "react"
import Customer from  "./Customer.js"
import {Routes, Route} from "react-router-dom"



function VehiclePage(){

const [clients, setClients] = useState([])

useEffect(() => {

    fetch("/clients")
    .then(resp => resp.json())
    .then(console.log)
}, [])




return(
    <>
  <Routes>
    <Route path = "/" element={
        <Customer
        client = {clients}
        />
    }/>
    
  </Routes>  
    
    
    </>

    )
}


export default VehiclePage