import React from 'react';

const Menu = ({ children }, props) => {
  return (
    <div>
      Menu right that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default Menu;
