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
  color: ${table.typography.color};
  display: flex;
  padding-left: ${table.space.cellPadding};
  padding-right: ${table.space.cellPadding};
  text-decoration: none;

  &:hover {
    color: ${table.typography.hoveredLink};
    text-decoration: underline;

    span > svg {
      fill: ${table.typography.hoveredLink};
    }
  }

  span {
    align-items: center;
    display: flex;
    height: 24px;
    margin-right: 3px;
    width: 14px;
  }
`;
