import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sorting from '../sorting/sorting';
import Filters from '../filters/filters';
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
} from './table.styles';
import Icon from '../icon/icon';
import link from '../../icons/link.svg';

export default class Table extends Component {
  componentDidMount() {
    /* Once the component is mounted two first columns are getting fixed */
    this.fixTable();
  }
  componentDidUpdate() {
    this.fixTable();
  }

  /* Filter Builter. Builds all the filters in the table based on JSON Data */
  getFilters(fixed = false) {
    /* Function first checks if it's being asked to generate filters for
    ** fixed columns or not. Fixed columns use different data source (props.fixedColumns)
     */
    const filterArr = fixed === false ? this.props.header : this.props.fixedColumns;

    return filterArr.map((item) => {
      /* The following conditional statement assures that unfixed columns don't get
      ** fixed columns filters. To properly filter data, unfixed columns operate on
      ** the full array of data (including 'company' and 'system' categories).
      ** With this if I simply eliminate two fixed categories, without mutating data
      */
      if ((fixed === false && item === 'company') || (fixed === false && item === 'system')) {
        return false;
      }
      const label = this.props.dataf[0][item].label;
      const title = `Filter by ${label}`;

      return (
        <StyledTh
          key={item}
          id={`${item}Filter`}
          className={item === 'company' || item === 'system' ? 'fixed' : ''}
          title={title}
        >
          <Filters
            filter={this.props.filter}
            dataf={this.props.dataf}
            values={this.props.filtersValues}
            category={item}
            /* Due to absolute positioning of fixed header from tHead at the bottom
            ** of the table, I'm modifying all tabIndexes. Props tab passes the right values.
            ** Fixed elements get lower tabIndexed to be focused before the main part of the table.
             */
            tab={fixed === false ? 3 : 2}
          />
        </StyledTh>
      );
    });
  }
  /* Header Builter. Builds all the header elements in the table based on JSON Data */
  getHeader(fixed = false) {
    /* Function first checks if it's being asked to generate elements for
    ** fixed columns or not. Fixed columns use different data source (props.fixedColumns)
     */
    const headerArr = fixed === false ? this.props.header : this.props.fixedColumns;
    return headerArr.map((item) => {
      const label = this.props.dataf[0][item].label;
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
          key={item}
          className={item === 'company' || item === 'system' ? 'fixed' : ''}
          id={`${item}Header`}
        >
          <StyledThWrapper>
            <StyledLabel>{label}</StyledLabel>
            <Sorting
              sort={this.props.sort}
              sorting={this.props.sorting}
              category={item}
              activeSorter={this.props.activeSorter}
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
    /* eslint-disable no-return-assign */
    return this.props.data.map((item, i) => {
      /* Get list of all the properties for a given company / system (every one in a <tr>) */
      const properties = Object.keys(item);
      const id = item.company.id;
      return (
        <tr id={id} key={item + id} title={`${item.company.data} - ${item.system.data}`}>
          <td tabIndex={-1}>Placeholder</td>
          {properties.map(elem => this.getBodyData(elem, item, i, id))}
        </tr>
      );
    });
  }

  getBodyData(category, system, index, id) {
    /* This function generates cells of the table with the right data. */
    const label = this.props.data[index][category].label;
    const value = this.props.data[index][category].data;
    const url = this.props.data[index][category].url;

    /* For accessability and usability purposes, I'm generating a human readable title */
    const titleCase = str =>
      str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ');

    const company = system.company.data;
    const ds = system.system.data;
    const title = `${titleCase(company)} — ${titleCase(ds)}. ${titleCase(label)}: ${value}`;

    /* If content of the cell (value) is just a single line of text then render goes as follows: */
    if (typeof value === 'string') {
      return (
        <td
          title={title}
          key={category}
          className={
            category === 'company' ? 'fixed' : category === 'system' ? 'fixed fixed-system' : ''
          }
          id={`${id}${category}`}
        >
          {url ? (
            <StyledExternalLink href={url} target="_blank" tabIndex={5}>
              <Icon i={link} size="s" color="#ffffff" in="no" active />
              {value}
            </StyledExternalLink>
          ) : (
            <p>{value}</p>
          )}
        </td>
      );
    }
    /* If content of the cell (value) is just a collection (array of)
    ** then render goes as follows:
    */
    if (typeof value === 'object') {
      const array = this.props.data[index][category].data;
      const arrayUrl = this.props.data[index][category].url;
      const titleForArray = `${titleCase(company)} — ${titleCase(ds)}. ${titleCase(label)}:`;

      return (
        <td key={category} id={`${id}${category}`}>
          <ul>
            {this.props.data[index][category].url
              ? array.map((elem, i) => (
                <li key={(elem, i)}>
                  <StyledExternalLink
                    title={`${titleForArray} ${array[i]}`}
                    href={arrayUrl[i]}
                    className="external-link"
                    target="_blank"
                    tabIndex={5}
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
        </td>
      );
    }
    return true;
  }

  fixTable() {
    /* This function fixes first two columns of the table
    ** when the full table component is loaded. Function needs access to DOM.
    ** Not and ideal solution, but it leads to massive performance improvement.
    ** All the body rows are positioned above placeholder cells and they keep their
    ** position. That limits the number of repayints and layout changes that
    ** the browser needs to perform.
     */
    const trs = []; // list of all the rows of the table.

    this.props.data.map((item) => {
      const id = item.company.id.split(' ')[0];
      trs.push(id);

      return true;
    });

    trs.map((item) => {
      /* After absolutely positioning all the cells in first two columns,
      ** we need to recreate the height and width of every cell. Dimensions
      ** of cells depend on the content, so we need to check, post render,
      ** what dimensions did every row get.
      */
      const trHeight = Math.ceil(document.getElementById(item).clientHeight);

      /* To get the right distance of the second column, I'm also checking
      ** the width of the first column.
      */
      const companyWidth = document.getElementById(`${item}company`).offsetWidth;

      /* BUG fixing get the distance of the table to the top of the website */

      const table = document.getElementById('table-container');
      const wrapper = table.parentNode;
      // const tableOffset = table.offsetTop;
      // const wrapperOffset = wrapper.offsetTop;
      const tableControls = wrapper.firstChild;
      const controlsHeight = tableControls.clientHeight;
      const tablePure = document.getElementById('table');
      const tableMargin = parseInt(window.getComputedStyle(tablePure, null).marginTop, 0);
      const filtersHeight = document.getElementById('categoriesHeader').clientHeight;

      /* Array of fixed categories */
      const fixedCategories = ['company', 'system'];
      fixedCategories.map((category) => {
        /* Firefox, Chrome and Safari measure height of elements in a different way
        ** Which forces me to have different values set up by checking userAgent
         */
        const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        console.log(isChrome);
        console.log(navigator.userAgent);

        // const paddingSpacer = isFirefox ? 40 : 2;
        const tdHeight = Math.ceil(document.getElementById(`${item}${category}`).children[0].clientHeight);
        const paddingRaw = trHeight - tdHeight;
        const paddingTop = (trHeight - tdHeight) / 2;
        const paddingBottom = paddingRaw - paddingTop;

        document.getElementById(`${item}${category}`).style.paddingTop = `${paddingTop}px`;
        document.getElementById(`${item}${category}`).style.paddingBottom = `${paddingBottom}px`;

        const fixedCompanyHeader = document.getElementById('companyHeader');
        const fixedCompanyFilter = document.getElementById('companyFilter');

        const fixedSystemHeader = document.getElementById('systemHeader');
        const fixedSystemFilter = document.getElementById('systemFilter');
        const spacer = isChrome ? 1 : 0;
        console.log(spacer);

        fixedSystemHeader.style.left = `${companyWidth + spacer}px`;
        fixedSystemFilter.style.left = `${companyWidth + spacer}px`;
        fixedCompanyHeader.style.left = 0;
        fixedCompanyFilter.style.left = 0;
        console.log('style.left', fixedSystemHeader.style.left);
        console.log('company width', companyWidth);

        /* Fix for firefox padding and margin calculations */
        const plumb = isFirefox ? '3px solid #222' : '';
        fixedSystemHeader.style.borderBottom = plumb;
        fixedCompanyHeader.style.borderBottom = plumb;
        /* End of FF fix */

        fixedCompanyHeader.style.top = `${controlsHeight + tableMargin}px`;
        fixedCompanyFilter.style.top = `${controlsHeight +
          tableMargin +
          filtersHeight -
          spacer * 2}px`;
        fixedSystemHeader.style.top = `${controlsHeight + tableMargin}px`;
        fixedSystemFilter.style.top = `${controlsHeight +
          tableMargin +
          filtersHeight -
          spacer * 2}px`;
        console.log('style.top', fixedCompanyFilter.style.top);

        fixedCompanyHeader.style.zIndex = 30000;
        fixedSystemHeader.style.zIndex = 30000;

        const tableCell = document.getElementById(`${item}${category}`);

        /* eslint-disable no-unused-expressions */
        category === 'company'
          ? (tableCell.style.left = 0)
          : (tableCell.style.left = `${companyWidth + spacer}px`);

        return true;
      });
      return true;
    });
  }

  render() {
    return (
      <StyledTable id="table">
        <StyledThead id="table-header">
          <StyledHeaderTr id="categoriesHeader">
            <StyledPlaceholder>Placeholder</StyledPlaceholder>
            <StyledPlaceholder>Placeholder</StyledPlaceholder>
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
  dataf: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  filtersValues: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  activeSorter: PropTypes.string.isRequired,
  fixedColumns: PropTypes.array.isRequired,
};
