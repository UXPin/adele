/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import { icon } from '../../style_tokens/tokens';
/*
* StyledIcon takes SVGInline component and styles the passed SVG object
* SVG object is passed directly onto the implementation of <Icon /> component
*/
const StyledIcon = styled(SVGInline)`
  &:focus {
    outline: 0;
  }
  > svg {
    width: ${props => icon.size[props.size]};
    height: 100%;
    /*
    * fill checks if icon has a prop data-active. If it it does than
    * color is being set to colorActive
    */
    fill: ${props => (props['data-active'] ? props.color : icon.colors.colorInactive)};
    transform: ${props => (props.rotate > 0 ? `rotate(${props.rotate}deg)` : '')};
    cursor: pointer;
    &:hover {
      fill: ${props =>
    (props['data-active']
      ? props.in === 'no'
        ? props.color
        : props.in === 'red' ? icon.colors.danger : icon.colors.colorActive
      : '')};
    }
  }
`;

StyledIcon.propTypes = {
  /*
  * Size is passed to styled component and triggers
  * the right size from imported design tokens
  */
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']).isRequired,
  /* Optional. Rotates icon by a given degree */
  rotate: PropTypes.number,
  /* Optional. Sets active style */
  'data-active': PropTypes.bool,
  /* Optional. Sets hover color for icons */
  in: PropTypes.oneOf(['red', 'blue', 'no']),
};

StyledIcon.defaultProps = {
  rotate: 0,
  'data-active': false,
  in: 'no',
};

export { StyledIcon as default };
