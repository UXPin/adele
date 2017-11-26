/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import logo from '../../icons/uxpin_logo.svg';

const Logo = (props) => {
  return (
    <a
      href="http://uxpin.com"
      target="_blank"
      rel="noopener noreferrer"
      title="UXPin logo"
      tabIndex={props.tab}
    >
      <SVGInline svg={logo} />
    </a>
  );
};

Logo.propTypes = {
  tab: PropTypes.number,
};

Logo.defaultProps = {
  tab: 0,
};

export { Logo as default };
