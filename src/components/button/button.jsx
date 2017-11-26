import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledButton } from './button.styles';

const Button = (props) => {
  if (props.type === 'link' && props.targetBlank === true) {
    return (
      <StyledLink href={props.action} target="_blank" tabIndex={props.tab}>
        {props.label}
      </StyledLink>
    );
  } else if (props.type === 'link' && props.targetBlank === false) {
    return (
      <StyledLink href={props.action} tabIndex={props.tab}>
        {props.label}
      </StyledLink>
    );
  } else if (props.type === 'button') {
    return (
      <StyledButton onClick={props.action} tabIndex={props.tab}>
        {props.label}
      </StyledButton>
    );
  }
  return false;
};

Button.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['link', 'button']).isRequired,
  targetBlank: PropTypes.bool,
  tab: PropTypes.number,
};

Button.defaultProps = {
  targetBlank: false,
  tab: 0,
};

export { Button as default };
