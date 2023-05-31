import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

function CustomerListItems({client}){
const navigate = useNavigate()
const {id} = client
  const handleEdit = (e) => {
    e.preventDefault()
   console.log(id)
       fetch(`/customers/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(client)
      })
      .then(res => {
        if (res.ok) {
          res.json().then(() => {
            navigate(`/customers/${id}/edit`);
          });
        } else {
          res.json().then(json => {
            console.log(json.error);
          });
        }
      });
  }
  

  
  return(
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
      
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{client.first_name}</Table.Cell>
        <Table.Cell>{client.last_name}</Table.Cell>
        <Table.Cell>{client.phone}</Table.Cell>
        <Table.Cell>{client.address}</Table.Cell>
      </Table.Row>
    

    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button onClick={handleEdit} size='small'
                  primary>
           Edit Customer
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
}

export default CustomerListItems