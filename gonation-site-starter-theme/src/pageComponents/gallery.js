import React from 'react';

const Gallery = ({ children }, props) => {
  return (
    <div>
      Gallery right that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default Gallery;
