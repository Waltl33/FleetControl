import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import CustomerListItems from "/home/hitstixx/code/vehicle-project/client/src/components/CustomerListItems.js"

function CustomerList({clients}) {


  return (
    <div>
      <ul className="Table">{clients.map(client =>
      <CustomerListItems
      client={client}
      key={client.id}
  
    />)}</ul>
    </div>

  )
}


export default CustomerList;