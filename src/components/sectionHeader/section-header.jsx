import React from 'react';
import PropTypes from 'prop-types';
import StyledSectionHeader from './section-header.styles';

const SectionHeader = ({
  className,
  content,
  id,
}) => (
  <StyledSectionHeader id={id} className={className}>{content}</StyledSectionHeader>
);

SectionHeader.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

SectionHeader.defaultProps = {
  className: '',
};

export { SectionHeader as default };
