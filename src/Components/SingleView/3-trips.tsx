import React from 'react';
import { useParams } from 'react-router-dom';
import ThreeTripsImage from '../../images/3trips.png'

function ThreeTrips() {

  return (
    <div>
        <img className="full-width" src={ThreeTripsImage}/>
    </div>
  );
}

export default ThreeTrips;