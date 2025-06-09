/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVGInline from 'react-svg-inline';

import logo from '../../icons/uxpin-logo-black.svg';

const Logo = ({ tab }) => {
  return (
    <Link
      to="/"
      tabIndex={tab}
      title="UXPin logo"
    >
      <SVGInline svg={logo} />
    </Link>
  );
};

Logo.propTypes = {
  tab: PropTypes.number,
};

Logo.defaultProps = {
  tab: 0,
};

export { Logo as default };
