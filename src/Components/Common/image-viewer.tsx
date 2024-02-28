import React from 'react';
import { useParams } from 'react-router-dom';

function ImageViewer() {
  const { imageName } = useParams();
  const imageURL = `/../../images${imageName}.png`; // Adjust the URL accordingly

  return (
    <div>
      <img src={imageURL} alt={imageName} />
    </div>
  );
}

export default ImageViewer;