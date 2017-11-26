import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon/icon';
import StyledArrowButton from './arrow-button.styles';
import chevron from '../../icons/chevron.svg';

const ArrowButton = props => (
  <StyledArrowButton onClick={props.action} direction={props.direction} tabIndex={1} title={`Move Table to the ${props.direction}`}>
    {props.scrollerInactive === props.direction ? (
      <Icon i={chevron} size="s" rotate={props.direction === 'left' ? 90 : 270} />
    ) : (
      <Icon i={chevron} size="s" rotate={props.direction === 'left' ? 90 : 270} active />
    )}
  </StyledArrowButton>
);

ArrowButton.propTypes = {
  action: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['right', 'left']).isRequired,
  scrollerInactive: PropTypes.oneOf(['right', 'left', '']).isRequired,
};

export { ArrowButton as default };
