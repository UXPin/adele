import React from 'react';
import { Helmet } from "react-helmet";

const HelmetTags = (props) => {

  
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@marcintreder" />
      <meta name="twitter:site" content="@uxpin"  />
      <meta name="twitter:image" content="https://adele.uxpin.com/build/twitter_image.jpg"/>
      <meta name="twitter:image:width" content="600" />
      <meta name="twitter:image:height" content="215" />
      <meta name="twitter:url" content={props.urlNoSpecialCharacters} />
      <meta content={props.title} name="twitter:title"/>
      <meta content={props.description} name="twitter:description"/>
      <meta content={props.description} name="description"/>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.urlNoSpecialCharacters} />
    </Helmet>
  );
};

export { HelmetTags as default };

