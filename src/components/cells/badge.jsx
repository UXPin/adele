import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Badge({ content }) {
  return (
    <StyledBadge className="badge">
      {content}
    </StyledBadge>
  );
}

Badge.propTypes = {
  content: PropTypes.string.isRequired,
};

export const StyledBadge = styled.span`
  color: #fff;
  background: #323335;
  display: inline;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  text-decoration: none;
  text-transformation: capitalize;
`;
