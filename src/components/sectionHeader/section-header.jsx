import React from 'react';
import PropTypes from 'prop-types';
import StyledSectionHeader from './section-header.styles';

const SectionHeader = ({
  content,
  id,
  className,
}) => (
  <StyledSectionHeader id={id} className={className}>{content}</StyledSectionHeader>
);

SectionHeader.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SectionHeader.defaultProps = {
  className: '',
};

export { SectionHeader as default };
