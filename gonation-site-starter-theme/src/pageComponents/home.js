import React from 'react';

const Home = ({ children }, props) => {
  return (
    <div>
      Home right that will be shadowed. CHILDREN !IMPORTANT
      {children}
    </div>
  );
};

export default Home;
