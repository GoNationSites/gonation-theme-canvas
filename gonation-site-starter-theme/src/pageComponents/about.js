import React from 'react';

const About = ({ children }, props) => {
  return (
    <div>
      About right that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default About;
