/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledSortingLink, StyledSortingWrapper } from './sorting.styles';
import arrow from '../../icons/arrow_up.svg';
import Icon from '../icon/icon';

const Sorting = ({
  activeSorter,
  category,
  sort,
  sorting,
  tab,
}) => (
  /*
  * Sorting returns styled sorting links, which on click activate sorting.
  * sorting function is defined on the table container (starts with handle Sorting())
  * and then calls sortTable(). Every click toggles change of style and label
  */
  <StyledSortingWrapper>
    <StyledSortingLink
      sorting={sorting}
      activeSorter={activeSorter}
      category={category}
      tabIndex={tab}
      title={`Current sorting: ${
        sorting === 'def' ? 'default' : `${activeSorter} ${sorting}`
      }`}
      onClick={() => {
        sort(category, sorting);
      }}
    >
      {/*
        * Conditional statement rendering the right label
        * state 'az' and 'def' renders 'A/Z' label
        * state 'za' renders 'Z/A' label
        */}
      {sorting === 'za' && activeSorter === category ? 'Z/A' : 'A/Z'}
      {/*
        * Conditional statement rendering the right kind of icon
        * state 'az' renders <Icon /> component with arrow pointing up
        * state 'za' renders <Icon /> component with arrow pointing down
        * state 'def' doesn't render <Icon />
        * arrows are added ONLY to the sorting link with the currently active category
        */}
      {sorting === 'az' && activeSorter === category ? (
        <Icon i={arrow} size="xs" rotate={180} color="#006cff" active />
      ) : sorting === 'za' && activeSorter === category ? (
        <Icon i={arrow} size="xs" color="#006cff" active />
      ) : (
        ''
      )}
    </StyledSortingLink>
  </StyledSortingWrapper>
);
Sorting.propTypes = {
  /* function triggering handleSorting() defined on the container */
  sort: PropTypes.func.isRequired,
  /* set kind of sorting.  */
  sorting: PropTypes.oneOf(['az', 'za', 'def']).isRequired,
  /* currently set sorter (category in which sorting occurs) */
  activeSorter: PropTypes.string.isRequired,
  /* category of the currently activated sorter  */
  category: PropTypes.string.isRequired,
  tab: PropTypes.number,
};

Sorting.defaultProps = {
  tab: 0,
};

export { Sorting as default };
