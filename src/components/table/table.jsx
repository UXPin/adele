import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sorting from '../sorting/sorting';
import Filters from '../filters/filters';
import { InternalLinkCell } from '../cells/internal-link';
import {
  StyledTh,
  StyledTable,
  StyledTbody,
  StyledThead,
  StyledHeaderTr,
  StyledFiltersTr,
  StyledThWrapper,
  StyledLabel,
  StyledExternalLink,
  StyledPlaceholder,
  StyledEmptyMessageTr,
} from './table.styles';
import Icon from '../icon/icon';
import link from '../../icons/link.svg';

const classNames = new Map([
  ['company', 'fixed'],
  ['system', 'fixed fixed-system'],
]);

export default class Table extends Component {
  /* Filter Builter. Builds all the filters in the table based on JSON Data */
  getFilters(fixed = false) {
    const {
      dataf,
      filter,
      filtersValues,
      fixedColumns,
      header,
    } = this.props;

    /* Function first checks if it's being asked to generate filters for
    ** fixed columns or not. Fixed columns use different data source (props.fixedColumns)
     */

    const filterArr = fixed === false ? header : fixedColumns;

    return filterArr.map((item) => {
      /* The following conditional statement assures that unfixed columns don't get
      ** fixed columns filters. To properly filter data, unfixed columns operate on
      ** the full array of data (including 'company' and 'system' categories).
      ** With this if I simply eliminate two fixed categories, without mutating data
      */
      if ((fixed === false && item === 'company') || (fixed === false && item === 'system')) {
        return false;
      }
      const label = dataf[0][item].label;
      const title = `Filter by ${label}`;

      return (
        <StyledTh
          className={item === 'company' || item === 'system' ? 'fixed' : ''}
          id={`${item}Filter`}
          key={item}
          title={title}
        >
          <Filters
            category={item}
            dataf={dataf}
            filter={filter}
            /* Due to absolute positioning of fixed header from tHead at the bottom
            ** of the table, I'm modifying all tabIndexes. Props tab passes the right values.
            ** Fixed elements get lower tabIndexed to be focused before the main part of the table.
            */
            tab={fixed === false ? 3 : 2}
            values={filtersValues}
          />
        </StyledTh>
      );
    });
  }

  /* Header Builter. Builds all the header elements in the table based on JSON Data */
  getHeader(fixed = false) {
    const {
      activeSorter,
      dataf,
      fixedColumns,
      header,
      sort,
      sorting,
    } = this.props;

    /* Function first checks if it's being asked to generate elements for
    ** fixed columns or not. Fixed columns use different data source (props.fixedColumns)
     */
    const headerArr = fixed === false ? header : fixedColumns;
    return headerArr.map((item) => {
      const label = dataf[0][item].label;
      /* The following conditional statement assures that unfixed columns don't get
      ** fixed columns filters. To properly filter data, unfixed columns operate on
      ** the full array of data (including 'company' and 'system' categories).
      ** With this if I simply eliminate two fixed categories, without mutating data
      */
      if ((fixed === false && item === 'company') || (fixed === false && item === 'system')) {
        return false;
      }

      return (
        <StyledTh
          className={item === 'company' || item === 'system' ? 'fixed' : ''}
          key={item}
          id={`${item}Header`}
        >
          <StyledThWrapper>
            <StyledLabel>{label}</StyledLabel>
            <Sorting
              activeSorter={activeSorter}
              category={item}
              sort={sort}
              sorting={sorting}
              /* Due to absolute positioning of fixed header from tHead at the bottom
              ** of the table, I'm modifying all tabIndexes. Props tab passes the right values.
              ** Fixed elements get lower tabIndexed to be focused
              ** before the main part of the table.
              ** Sorting gets higher number to be focused after all the filters.
               */
              tab={fixed === false ? 5 : 4}
            />
          </StyledThWrapper>
        </StyledTh>
      );
    });
  }

  /* Body Builter. Builds all the body elements in the table based on JSON Data */
  getBody() {
    const {
      data,
      header,
    } = this.props;

    /* eslint-disable no-return-assign */
    /* If there are no systems matching the criteria, show the following message */
    if (data.length === 0) {
      return (
        <StyledEmptyMessageTr>
          <td id="empty-message" colSpan={header.length}>
            <div>
              Adele doesn&#39;t know of a design system matching your criteria
              {' '}
              <span role="img" aria-label="sad face emoji">
                😔
              </span>
              . If you happen to know one, feel free to add it by creating a PR in
              {' '}
              <a
                href="https://github.com/uxpin/adele"
                rel="noopener noreferrer"
                target="_blank"
              >
                Adele&#39;s repo
              </a>
              .
            </div>
          </td>
        </StyledEmptyMessageTr>
      );
    }

    return data.map((item, i) => {
      const id = item.company.id;
      /* Get list of all the properties for a given company / system (every one in a <tr>) */
      const properties = Object.keys(item);

      return (
        <tr id={id} key={item + id} title={`${item.company.data} - ${item.system.data}`}>
          <td tabIndex={-1}>
            <p>Placeholder</p>
          </td>
          {properties.map((elem) => this.getBodyData(elem, item, i, id))}
        </tr>
      );
    });
  }

  getBodyData(category, system, index, id) {
    const {
      data,
    } = this.props;

    /* This function generates cells of the table with the right data. */
    const label = data[index][category].label;
    const value = data[index][category].data;
    const url = data[index][category].url;

    /* For accessability and usability purposes, I'm generating a human readable title */
    const titleCase = (str) => str
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(' ');

    const company = system.company.data;
    const ds = system.system.data;
    const title = `${titleCase(company)} — ${titleCase(ds)}. ${titleCase(label)}: ${value}`;

    /* Link Component used in the table */
    const stringLink = (
      <StyledExternalLink href={url} target="_blank" tabIndex={5}>
        <Icon i={link} size="s" color="#ffffff" in="no" active />
        {value}
      </StyledExternalLink>
    );

    /* If content of the cell (value) is just a single line of text then render
    ** goes as follows:
    */
    const className = classNames.get(category) || '';

    if (typeof value === 'string') {
      let content = url ? stringLink : (<p>{value}</p>);

      if (category === 'company') {
        content = (<InternalLinkCell value={value} route={ds} />);
      }

      return (
        <td
          className={className}
          id={`${id}${category}`}
          key={category}
          title={title}
        >
          <div className="cell-wrapper">
            {content}
          </div>
        </td>
      );
    }
    /* If content of the cell (value) is a collection (array of)
    ** then render goes as follows:
    */
    if (typeof value === 'object') {
      const array = data[index][category].data;
      const arrayUrl = data[index][category].url;
      const titleForArray = `${titleCase(company)} — ${titleCase(ds)}. ${titleCase(label)}:`;

      return (
        <td
          className={className}
          id={`${id}${category}`}
          key={category}
        >
          <div className="cell-wrapper">
            <ul>
              {data[index][category].url
                ? array.map((elem, i) => (
                  <li key={(elem, i)}>
                    <StyledExternalLink
                      className="external-link"
                      href={arrayUrl[i]}
                      tabIndex={5}
                      target="_blank"
                      title={`${titleForArray} ${array[i]}`}
                    >
                      <Icon i={link} size="s" color="#ffffff" in="no" active />
                      {elem}
                    </StyledExternalLink>
                  </li>
                ))
                : array.map((elem, i) => (
                  <li title={`${titleForArray} ${array[i]}`} key={elem}>
                    {elem}
                  </li>
                ))}
            </ul>
          </div>
        </td>
      );
    }
    return true;
  }

  render() {
    return (
      <StyledTable id="table">
        <StyledThead id="table-header">
          <StyledHeaderTr id="categoriesHeader">
            <StyledPlaceholder>Company</StyledPlaceholder>
            <StyledPlaceholder>System</StyledPlaceholder>
            {this.getHeader()}
          </StyledHeaderTr>
          <StyledFiltersTr id="filtersHeader">
            <StyledPlaceholder>Placeholder</StyledPlaceholder>
            <StyledPlaceholder style={{ display: 'block' }}>Placeholder</StyledPlaceholder>
            {this.getFilters()}
          </StyledFiltersTr>
        </StyledThead>
        <StyledTbody>{this.getBody()}</StyledTbody>
        <StyledThead id="fixedHeader">
          <StyledHeaderTr>{this.getHeader(true)}</StyledHeaderTr>
          <StyledFiltersTr id="filtersHeader">{this.getFilters(true)}</StyledFiltersTr>
        </StyledThead>
      </StyledTable>
    );
  }
}
/* eslint-disable react/forbid-prop-types */
/* some of the props expect dynamically built objects
** hence - PropTypes.object. Describing the structure of
** data would be impossible and limiting.
*/
Table.propTypes = {
  activeSorter: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  dataf: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  filtersValues: PropTypes.object.isRequired,
  fixedColumns: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
};
