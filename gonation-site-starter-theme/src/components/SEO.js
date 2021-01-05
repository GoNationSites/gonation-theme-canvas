import React from 'react';
import { Helmet } from 'react-helmet';
import avatarCoverStringBuilder from '../helpers/avatarCoverStringBuilder';
import capitalize from '../helpers/capitalize';

const SEO = props => {
  console.log('seo props: ', props);
  const { businessData } = props.data.data;
  const { pageContext } = props.data.pageContext;
  return (
    <Helmet>
      <title>{`${businessData.name} | ${capitalize(pageContext.title)}`}</title>
      <html lang='en' />
      <meta name='description' content={businessData.desc} />
      <meta
        name='image'
        content={avatarCoverStringBuilder(
          businessData.avatar.imageBaseUrl,
          businessData.avatar.imagePrefix
        )}
      />
      <link rel='canonical' href={businessData.links.website} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={businessData.links.website} />
      <meta property='og:title' content={capitalize(pageContext.title)} />
      <meta property='og:description' content={businessData.desc} />
      <meta
        property='og:image'
        content={avatarCoverStringBuilder(
          businessData.avatar.imageBaseUrl,
          businessData.avatar.imagePrefix
        )}
      />
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={businessData.links.twitter} />
      <meta name='twitter:title' content={capitalize(pageContext.title)} />
      <meta name='twitter:description' content={businessData.desc} />
      <meta
        name='twitter:image'
        content={avatarCoverStringBuilder(
          businessData.avatar.imageBaseUrl,
          businessData.avatar.imagePrefix
        )}
      />
    </Helmet>
  );
};

export default SEO;
