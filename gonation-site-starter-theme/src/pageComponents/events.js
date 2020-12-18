import React from 'react';

const Events = ({ children }, props) => {
  return (
    <div>
      Events right that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default Events;
