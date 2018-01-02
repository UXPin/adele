import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableControlsWrapper,
  StyledMoveLabel,
  StyledSearchWrapper,
} from './table-controls.styles';

import Input from '../input/input';
import ArrowButtonGroup from '../arrowButtonGroup/arrow-button-group';

const TableControls = props => (
  <StyledTableControlsWrapper>
    <StyledMoveLabel>Filter categories:</StyledMoveLabel>
    <StyledSearchWrapper>
      <Input
        name="search"
        type="search"
        color="light"
        placeholder="Type to filter..."
        autoComplete="off"
        action={e => props.filterSearch(e)}
        controlled={false}
        tab={1}
      />
    </StyledSearchWrapper>
    <StyledMoveLabel>See More:</StyledMoveLabel>
    <ArrowButtonGroup action={props.moveTable} scrollerInactive={props.scrollerInactive} />
  </StyledTableControlsWrapper>
);

TableControls.propTypes = {
  moveTable: PropTypes.func.isRequired,
  filterSearch: PropTypes.func.isRequired,
  scrollerInactive: PropTypes.oneOf(['left', 'right', '']).isRequired,
};

export { TableControls as default };
