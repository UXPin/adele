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
  StyledEmptyMessageTr,
} from './table.styles';
import Icon from '../icon/icon';
import link from '../../icons/link.svg';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    /* Once the component is mounted two first columns are getting fixed */
    // this.fixTable();
  }
  componentDidUpdate() {
    // this.fixTable();
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
    /* If there are no systems matching the criteria, show the following message */
    if (this.props.data.length === 0) {
      return (
        <StyledEmptyMessageTr>
          <td id="empty-message" colSpan={this.props.header.length}>
            <div>
              Adele doesn&#39;t know of a design system matching your criteria{' '}
              <span role="img" aria-label="sad face emoji">
                😔
              </span>. If you happen to know one, feel free to add it by creating a PR in{' '}
              <a
                href="https://github.com/marcintreder/adele"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adele&#39;s repo
              </a>.
            </div>
          </td>
        </StyledEmptyMessageTr>
      );
    }
    return this.props.data.map((item, i) => {
      /* Get list of all the properties for a given company / system (every one in a <tr>) */
      const properties = Object.keys(item);
      const id = item.company.id;
      return (
        <tr id={id} key={item + id} title={`${item.company.data} - ${item.system.data}`}>
          <td tabIndex={-1}>
            <p>Placeholder</p>
          </td>
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
            <div className="cell-wrapper">{stringLink}</div>
          ) : (
            <div className="cell-wrapper">
              <p>{value}</p>
            </div>
          )}
        </td>
      );
    }
    /* If content of the cell (value) is a collection (array of)
    ** then render goes as follows:
    */
    if (typeof value === 'object') {
      const array = this.props.data[index][category].data;
      const arrayUrl = this.props.data[index][category].url;
      const titleForArray = `${titleCase(company)} — ${titleCase(ds)}. ${titleCase(label)}:`;

      return (
        <td
          key={category}
          id={`${id}${category}`}
          className={
            category === 'company' ? 'fixed' : category === 'system' ? 'fixed fixed-system' : ''
          }
        >
          <div className="cell-wrapper">
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
          </div>
        </td>
      );
    }
    return true;
  }

  setFixedCellsHeights(systems) {
    /* Save heights in an array of {objects}
    ** structure: [{id: 0, company: 'shopify', height: 138, rawHeight: 78}]
    */
    const heights = [];

    systems.map((item, i) => {
      /* get company name */
      const company = item.company.data;
      /* Get company id */

      const id = i;
      /* Get object with system and save categories */
      const categories = Object.keys(item);
      /* save id's for a first category after 'company' and 'system' */
      const catId = `${i}${categories[2]}`;
      /* get height of catId */
      const nonFixedTd = document.getElementById(catId);
      /* if there are no non-fixed <td>'s then set height to a given number (148).
      ** This is necessary to keep a readable height of fixed cells.
      */
      const height = nonFixedTd === null ? 148 : nonFixedTd.offsetHeight;
      /* get tr padding */
      const tr = document.getElementById(id);
      const trStyle = window.getComputedStyle(tr);
      const paddingTop = parseInt(trStyle.paddingTop, 0);
      const paddingBottom = parseInt(trStyle.paddingBottom, 0);
      /* eslint-disable no-unused-expressions */
      if (nonFixedTd === null) {
        tr.style.height = `${height}px`;
      }
      /* set raw height */
      const rawHeight = height - paddingTop - paddingBottom;

      /* Initialize object for data */
      const dataObj = {};
      dataObj.id = id;
      dataObj.company = company;
      dataObj.height = height;
      dataObj.rawHeight = rawHeight;

      return heights.push(dataObj);
    });

    /* Set heights for every <td>'s */

    heights.forEach((e) => {
      /* create id of two fixed cells - 'company' and 'system' */
      const companyId = `${e.id}company`;
      const systemId = `${e.id}system`;
      /* set an array to avoid unnecessary code repetitions */
      const idArr = [companyId, systemId];

      /* Set heights of fixed cells to height and wrappers to rawHeight
      ** Only these two params let us avoid problems with changing
      ** height of the tr depending on the content.
      */

      idArr.forEach((item) => {
        /* get <td> and wrappers */
        const element = document.getElementById(item);
        const wrapper = element.childNodes[0];
        /* set heights */
        element.style.height = `${e.height}px`;
        wrapper.style.height = `${e.rawHeight}px`;
      });
    });
  }

  // fixTable() {
  //   /* This function fixes first two columns of the table
  //   ** when the full table component is loaded. Function needs access to DOM.
  //   ** Not and ideal solution, but it leads to massive performance improvement.
  //   ** All the body rows are positioned above placeholder cells and they keep their
  //   ** position. That limits the number of repayints and layout changes that
  //   ** the browser needs to perform.
  //    */
  //   const trs = []; // list of all the rows of the table.
  //
  //   this.props.data.map((item) => {
  //     const id = item.company.id.toString();
  //     trs.push(id);
  //
  //     return true;
  //   });
  //
  //   /* set corect heights for all absolutely positioned <td>s */
  //
  //   // this.props.heights.forEach((item) => {
  //   //   /* create id of two fixed cells - 'company' and 'system' */
  //   //   const companyId = `${item.id}company`;
  //   //   const systemId = `${item.id}system`;
  //   //
  //   //   /* set heights of fixed cells to rawHeight */
  //   //
  //   //   document.getElementById(companyId).childNodes[0].style.height = `${item.rawHeight}px`;
  //   //   document.getElementById(systemId).childNodes[0].style.height = `${item.rawHeight}px`;
  //   // });
  //
  //   trs.map((item) => {
  //     /* After absolutely positioning all the cells in the first two columns,
  //     ** we need to recreate the height and width of every cell. Dimensions
  //     ** of cells depend on the content, so we need to check, after render,
  //     ** what dimensions did every row get.
  //     */
  //     const companyWidth = document.getElementById(`${item}company`).offsetWidth;
  //
  //     /* Array of fixed categories */
  //     const fixedCategories = ['company', 'system'];
  //     fixedCategories.map((category) => {
  //       const fixedCompanyHeader = document.getElementById('companyHeader');
  //       const fixedCompanyFilter = document.getElementById('companyFilter');
  //
  //       const fixedSystemHeader = document.getElementById('systemHeader');
  //       const fixedSystemFilter = document.getElementById('systemFilter');
  //
  //       fixedSystemHeader.style.left = `${companyWidth}px`;
  //       fixedSystemFilter.style.left = `${companyWidth}px`;
  //       fixedCompanyHeader.style.left = 0;
  //
  //       const filtersHeight = this.props.filtersHeight;
  //       const fixedHeaderHeight = this.props.fixedHeaderHeight;
  //
  //       fixedCompanyHeader.style.top = `${filtersHeight}px`;
  //       fixedCompanyFilter.style.top = `${filtersHeight + fixedHeaderHeight}px`;
  //       fixedSystemHeader.style.top = `${filtersHeight}px`;
  //       fixedSystemFilter.style.top = `${filtersHeight + fixedHeaderHeight}px`;
  //
  //       /* zIndexes for two fixed columns */
  //       fixedCompanyHeader.style.zIndex = 30000;
  //       fixedSystemHeader.style.zIndex = 30000;
  //
  //       const tableCell = document.getElementById(`${item}${category}`);
  //       /* eslint-disable no-unused-expressions */
  //       category === 'company'
  //         ? (tableCell.style.left = 0)
  //         : (tableCell.style.left = `${companyWidth}px`);
  //
  //       return true;
  //     });
  //     // this.setFixedCellsHeights(this.props.data);
  //     return true;
  //   });
  //
  //   /* Fixing when table is empty */
  //
  //   const fixedCompanyHeader = document.getElementById('companyHeader');
  //   const fixedCompanyFilter = document.getElementById('companyFilter');
  //
  //   const fixedSystemHeader = document.getElementById('systemHeader');
  //   const fixedSystemFilter = document.getElementById('systemFilter');
  //
  //   const filtersHeight = this.props.filtersHeight;
  //
  //   const fixedHeaderHeight = this.props.fixedHeaderHeight;
  //
  //   fixedCompanyHeader.style.top = `${filtersHeight}px`;
  //   fixedCompanyFilter.style.top = `${filtersHeight + fixedHeaderHeight}px`;
  //   fixedSystemHeader.style.top = `${filtersHeight}px`;
  //   fixedSystemFilter.style.top = `${filtersHeight + fixedHeaderHeight}px`;
  // }

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
  dataf: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  filtersValues: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  activeSorter: PropTypes.string.isRequired,
  fixedColumns: PropTypes.array.isRequired,
  // filtersHeight: PropTypes.number,
  // /fixedHeaderHeight: PropTypes.number.isRequired,
  /* filteredCat: PropTypes.bool.isRequired, */
  /* heights: PropTypes.arrayOf(PropTypes.shape).isRequired, */
  /* refreshAfterFilterCat: PropTypes.func.isRequired, */
};

// Table.defaultProps = {
//   filtersHeight: 80,
// };
