import React from 'react';
import PropTypes from 'prop-types';

import StyledNavLink from './nav-link.styles';

const NavLink = ({
  action,
  label,
  tab,
}) => (
  <StyledNavLink onClick={action} tabIndex={tab}>
    {label}
  </StyledNavLink>
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  tab: PropTypes.number,
};

NavLink.defaultProps = {
  tab: 0,
};

export { NavLink as default };
