import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate, useParams } from 'react-router-dom'


function EditCustomerForm({client, updateCustomer}){

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState ("")
    const [address, setAddress] = useState ("")
    const [phone, setPhone] = useState ("")

    let navigate = useNavigate()

    let editCustomer = {
        first_name: first_name,
        last_name: last_name,
        address: address,
        phone: phone
    }

    let {id} = useParams()
    useEffect(() => {
      fetch(`clients/${id}`)
      .then(res => res.json())
      .then(editCustomer)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/clients/${id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editCustomer)
        })
        .then(resp => {
            if (resp.ok) {
              return resp.json();
            } else {
              throw new Error("Network response was not ok.");
            }
          })
          .then(myClient => {
            updateCustomer(myClient)
            navigate(`/`);
          })
          .catch(error => {
            console.error("Error updating customer:", error);
            // Add appropriate error handling here, e.g. display a message to the user
          });
        }
       
    



    return (
        <Form onSubmit = {(e) => {{handleSubmit(e)}}}>
          <Form.Group unstackable widths={2}>
            <Form.Input label='First name' 
            placeholder='First name' 
            value = {first_name}
            onChange={(e) => setFirstName(e.target.value)}/>
            <Form.Input label='Last name'
             placeholder='Last name'
             value = {last_name} 
             onChange= {(e) => setLastName(e.target.value)}/>
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='Address' 
            placeholder='Address' 
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
            />
            <Form.Input label='Phone' 
            placeholder='Phone'
            value = {phone}
            onChange = {(e) => setPhone(e.target.value)}/>
          </Form.Group>
      
          <Button type='submit'>Submit</Button>
        </Form>
      )}
      
export default EditCustomerForm