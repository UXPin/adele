import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledButton } from './button.styles';

const Button = ({
  action,
  label,
  tab,
  targetBlank,
  type,
}) => {
  if (type === 'link' && targetBlank === true) {
    return (
      <StyledLink href={action} target="_blank" tabIndex={tab}>
        {label}
      </StyledLink>
    );
  }

  if (type === 'link' && targetBlank === false) {
    return (
      <StyledLink href={action} tabIndex={tab}>
        {label}
      </StyledLink>
    );
  }

  if (type === 'button') {
    return (
      <StyledButton onClick={action} tabIndex={tab}>
        {label}
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
