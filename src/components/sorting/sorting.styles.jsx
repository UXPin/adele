/* eslint-disable */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { link, typography } from '../../style_tokens/tokens';

const StyledSortingLink = styled.button`
  /* reset of button styles */
  background: none;
  border: none;
  outline: none;

  font-family: ${typography.fontFamily};
  font-size: ${typography.regularText};
  /*
  * Color is applied based on props
  * if sorting is set to default ('def') link gets colorInactive (gray)
  * if sorting is set to anything but default AND a given link is currently
  * used by user (category equals active sorter) than link gets colorActive (blue)
  */
  color: ${props =>
    props.sorting !== 'def' && props.activeSorter === props.category
      ? link.colors.colorActive
      : link.colors.colorInactive};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${link.colors.colorActive};
  }
  padding-top: 3px;
  padding-bottom: 0;
  margin-top: 0;

  span {
    position: relative;
    top: ${props => (props.sorting === 'za' ? '' : '1px')};
    left: -2px;
  }
`;

const StyledSortingWrapper = styled.div`
  width: 20px;
  height: 100%;
  padding-top: 0;
  margin: 0;
`;

StyledSortingLink.propTypes = {
  /* Set kind of sorting. Used to set the right color. */
  sorting: PropTypes.oneOf(['az', 'za', 'def']).isRequired,
  /*
  * Currently set sorter and category. Used to set the right color.
  * activeSorter represents the category of the last used sorting link
  * category represnts the category of the currently used sorting link
  */
  activeSorter: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export { StyledSortingLink, StyledSortingWrapper };
