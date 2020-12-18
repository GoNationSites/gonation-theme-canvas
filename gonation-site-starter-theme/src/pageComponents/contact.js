import React from 'react';

const Contact = ({ children }, props) => {
  return (
    <div>
      Contact that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default Contact;
