import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import SEO from '../../components/SEO';

const Layout = props => {
  const { children, data } = props;
  //   todo get the logo via the data. If no logo via the data || some condition passes, then get it from local.
  return (
    <>
      <SEO data={data} />
      <Navigation data={data} />
      {children}
      <Footer data={data} />
    </>
  );
};

export default Layout;
