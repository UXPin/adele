import React from 'react';
import PropTypes from 'prop-types';
import StyledInfoArticle from './info-container.styles';

/* eslint-disable import/prefer-default-export */
const InfoContainer = ({ children }) => <StyledInfoArticle>{children}</StyledInfoArticle>;

InfoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export { InfoContainer as default };
