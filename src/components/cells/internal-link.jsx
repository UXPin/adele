import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { table } from '../../style_tokens/tokens';
import { clearKey } from '../../helpers/text';

export function InternalLinkCell({ value, route }) {
  const to = clearKey(route);

  return (
    <StyledLink to={to}>
      {value}
    </StyledLink>
  );
}

InternalLinkCell.propTypes = {
  route: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export const StyledLink = styled(Link)`
  display: flex;
  color: ${table.typography.color};
  text-decoration: none;

  padding-left: ${table.space.cellPadding};
  padding-right: ${table.space.cellPadding};
  &:hover {
    color: ${table.typography.hoveredLink};
    text-decoration: underline;
    span > svg {
      fill: ${table.typography.hoveredLink};
    }
  }
  span {
    display: flex;
    align-items: center;
    height: 24px;
    width: 14px;
    margin-right: 3px;
  }
`;
