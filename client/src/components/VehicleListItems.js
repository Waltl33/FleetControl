import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

function VehicleListItems({vehicle}){
// const navigate = useNavigate()

// const {id, first_name, last_name, address, phone} = client

// function handleEdit(e) {
//     e.preventDefault()
  
//        fetch(`/clients/${id}`, {
//         method: "PATCH",
//         headers: {"Content-Type": "application/json"
//       },
//         body: JSON.stringify(client)
//       })
//       .then(res => {
//         if (res.ok) {
//           res.json().then(() => {
//             navigate(`/customers/${id}/edit`);
//           });
//         } else {
//           res.json().then(json => {
//             console.log(json.error);
//           });
//         }
//       });
//   }
  
  
  return(
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Make</Table.HeaderCell>
        <Table.HeaderCell>Model</Table.HeaderCell>
        <Table.HeaderCell>Color</Table.HeaderCell>
        <Table.HeaderCell>Vehicle Number</Table.HeaderCell>
        <Table.HeaderCell>mileage</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{vehicle.make}</Table.Cell>
        <Table.Cell>{vehicle.model}</Table.Cell>
        <Table.Cell>{vehicle.color}</Table.Cell>
        <Table.Cell>{vehicle.vehicle_number}</Table.Cell>
        <Table.Cell>{vehicle.mileage}</Table.Cell>
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
          <Button  size='small'
                  primary>
           Edit Customer
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
}

export default VehicleListItems