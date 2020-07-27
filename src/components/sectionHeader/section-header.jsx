import React from 'react';
import PropTypes from 'prop-types';
import StyledSectionHeader from './section-header.styles';

const SectionHeader = ({
  content,
  id,
}) => (
  <StyledSectionHeader id={id}>{content}</StyledSectionHeader>
);

SectionHeader.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { SectionHeader as default };
