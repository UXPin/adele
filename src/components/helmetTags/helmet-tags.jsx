import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const HelmetTags = ({title, description, urlNoSpecialCharacters}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@marcintreder" />
      <meta name="twitter:site" content="@uxpin" />
      <meta name="twitter:image" content="https://adele.uxpin.com/build/twitter_image.jpg"/>
      <meta name="twitter:image:width" content="600" />
      <meta name="twitter:image:height" content="215" />
      <meta name="twitter:url" content={urlNoSpecialCharacters} />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description"/>
      <meta content={description} name="description"/>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlNoSpecialCharacters} />
    </Helmet>
  );
};

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlNoSpecialCharacters: PropTypes.string,
};

export { HelmetTags as default };