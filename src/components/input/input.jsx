/* eslint-disable jsx-a11y/tabindex-no-positive */
import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './input.styles';

const Input = (props) => {
  /* Based on the passed prop 'controlled' component
  ** returns either the controlled (with value) or untrolled
  ** input. React doesn't accept inputs that have dynamic setup
  ** controlled / uncontrolled.
  */
  if (props.controlled === false) {
    /* uncontrolled input */
    return (
      <StyledInput
        id={props.id}
        name={props.name}
        type={props.type}
        color={props.color}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onChange={props.action}
        tabIndex={props.tab}
      />
    );
  } else if (props.controlled === true) {
    /* controlled input */
    return (
      <StyledInput
        id={props.id}
        name={props.name}
        type={props.type}
        color={props.color}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={props.action}
        tabIndex={props.tab}
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
  autoComplete: PropTypes.string,
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
