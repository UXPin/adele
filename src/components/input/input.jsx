/* eslint-disable jsx-a11y/tabindex-no-positive */
import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './input.styles';

const Input = ({
  action,
  autoComplete,
  color,
  controlled,
  id,
  name,
  placeholder,
  tab,
  type,
  value,
}) => {
  /* Based on the passed prop 'controlled' component
  ** returns either the controlled (with value) or untrolled
  ** input. React doesn't accept inputs that have dynamic setup
  ** controlled / uncontrolled.
  */
  if (controlled === false) {
    /* uncontrolled input */
    return (
      <StyledInput
        id={id}
        name={name}
        type={type}
        color={color}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={action}
        tabIndex={tab}
      />
    );
  }

  if (controlled === true) {
    /* controlled input */
    return (
      <StyledInput
        id={id}
        name={name}
        type={type}
        color={color}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={action}
        tabIndex={tab}
      />
    );
  }

  return false;
};

Input.propTypes = {
  controlled: PropTypes.bool.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'text', 'url']),
  color: PropTypes.oneOf(['light', 'dark']),
  autoComplete: PropTypes.oneOf(['on', 'off']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  tab: PropTypes.number,
};

Input.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  color: 'light',
  autoComplete: 'off',
  value: undefined,
  tab: 0,
};

export { Input as default };
