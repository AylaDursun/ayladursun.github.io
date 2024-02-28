import React from 'react';
import { useParams } from 'react-router-dom';
import ProcessImage from '../../images/Process.png'

function Process() {

  return (
    <div>
        <img className="full-width" src={ProcessImage}/>
    </div>
  );
}

export default Process;