import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import VehicleListItems from './VehicleListItems';

function VehicleList({vehicles}) {




  return (
    <div>
      <ul className="Table">{vehicles.map(vehicle =>
      <VehicleListItems
      vehicle = {vehicle}
      key={vehicle.id}
  
    />)}</ul>
    </div>

  )
}


export default VehicleList;