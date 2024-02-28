import React from 'react';
import { useParams } from 'react-router-dom';
import CountryDataImage from '../../images/country-data.png'

function CountryData() {

  return (
    <div>
        <img className="full-width" src={CountryDataImage}/>
    </div>
  );
}

export default CountryData;