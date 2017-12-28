import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import data from '../../data/data.JSON';

import {
  StyledTableContainer,
  StyledTableWrapper,
  StyledControlsWrapper,
} from './table-container.styles';
import Table from '../../components/table/table';
import FilterTag from '../../components/filterTag/filter-tag';
import FilterTagSection from '../../components/filterTagSection/filter-tag-section';
import TableControls from '../../components/tableControls/table-controls';

export default class TableContainer extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      sorting: 'def',
      filtersValues: {},
      scrollerInactive: 'left',
      fixedColumns: ['company', 'system'],
    };
    this.filterTable = this.filterTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortTable = this.sortTable.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.moveTable = this.moveTable.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.refreshContainer = this.refreshContainer.bind(this);
  }

  componentWillMount() {
    const headerArr = Object.keys(data[0]);

    /* unfixedHeader is used for generating data for columns
    ** that are not manually set us fixed with position absolute.
    ** This Array is passed directly to table and used by functions
    ** generating table.
    */

    this.setState({
      systemsJSON: data, // mutable data object
      systemsFixed: data, // inmutable data object
      header: headerArr,
      headerFix: headerArr,
      systemsCat: data,
      systemsCatFixed: data,
      activeSorter: '',
    });

    /* Alternative Source of Data. External server */
    /* axios
      .get('https://quarkbackend.com/getfile/marcintreder/scarlet-json')
      .then(({data}) => {
        const headerArr = Object.keys(data[0]);
        this.setState({
          systemsJSON: data, // mutable data object
          systemsFixed: data, // inmutable data object
          header: headerArr,
          headerFix: headerArr,
          systemsCat: data,
          systemsCatFixed: data,
          activeSorter: ''
        });
      })
      .catch((err)=> {}); */
  }

  componentDidMount() {
    /* When user is scrolling the page, header of the table is getting
    ** fixed to make the data readable and accessible
    ** Thrue or false values are passed through a callback to the parent.
    ** This is necessary to change styles in a sibling component (TableControls).
    ** Right column is fixed by a method in the Table component.
    */

    /* Dom elements used for fixed position calculations */
    const topBarHeight = document.getElementById('top-bar').getBoundingClientRect().height;
    const headerHeight = document.getElementById('header').getBoundingClientRect().height;
    const container = document.getElementById('table-container');
    const wrapper = container.parentNode;
    const wrapperOffset = wrapper.offsetTop;

    /* Header elements to be fixed */
    const tableControls = wrapper.firstChild;
    const thead = document.getElementById('table-header');
    const fixedCompanyHeader = document.getElementById('companyHeader');
    const fixedSystemHeader = document.getElementById('systemHeader');
    const fixedCompanyFilter = document.getElementById('companyFilter');
    const fixedSystemFilter = document.getElementById('systemFilter');

    const relayoutTrigger = headerHeight - topBarHeight;
    document.addEventListener('scroll', () => {
      if (window.scrollY >= relayoutTrigger && this.props.scroll === false) {
        this.props.scrollUpdate(true);
      } else if (window.scrollY >= relayoutTrigger && this.props.scroll === true) {
        const translate = this.fixHeader(wrapperOffset, topBarHeight);
        const shadow = '0px 20px 14px -2px rgba(21, 21, 21, .3)';
        tableControls.style.transform = translate;
        thead.style.transform = translate;
        fixedCompanyHeader.style.transform = translate;
        fixedSystemHeader.style.transform = translate;
        fixedCompanyFilter.style.transform = translate;
        fixedSystemFilter.style.transform = translate;

        if (thead.style.boxShadow === '') {
          thead.style.boxShadow = shadow;
          fixedCompanyFilter.style.boxShadow = shadow;
          fixedSystemFilter.style.boxShadow = shadow;
        }
      } else if (window.scrollY < relayoutTrigger && this.props.scroll === true) {
        this.props.scrollUpdate(false);
        const translate = '';
        const shadow = '';

        tableControls.style.transform = translate;
        thead.style.transform = translate;
        fixedCompanyHeader.style.transform = translate;
        fixedSystemHeader.style.transform = translate;
        fixedCompanyFilter.style.transform = translate;
        fixedSystemFilter.style.transform = translate;

        if (thead.style.boxShadow !== '') {
          thead.style.boxShadow = shadow;
          fixedCompanyFilter.style.boxShadow = shadow;
          fixedSystemFilter.style.boxShadow = shadow;
        }
      }
    });
    window.addEventListener('resize', this.refreshContainer);
  }

  /* FILTERS. Functions responsible for filtering data. */

  getFilterSelection() {
    /* Function printing tags with selected filters. */
    return this.state.filters.map((item) => {
      const label = this.state.systemsFixed[0][item].label;
      const formValue = this.state[item];
      return (
        <FilterTag
          key={item}
          label={label}
          category={item}
          formValue={formValue}
          clear={this.clearFilters}
        />
      );
    });
  }

  filterTable() {
    /* Function filtering data in rows. */

    /* Criteria lists all the currently active filters */
    const criteria = this.state.filters;
    /* Filtered Multiple returns filtered lists of systems */
    const filteredMultiple = this.state.systemsCatFixed
      .filter((item) => {
        /* Check is an array of boolean values
      ** if for a given category of a given system (data set)
      ** data does not consist of the value of a filter
      ** function returns 'false'. If data has the value of a filter
      ** function returns 'true' Any 'false' value returns false for the filter.
      */
        const check = [];
        criteria.map((e) => {
          /* First check if a system has a given category */
          if (item[e]) {
            /* Some categories have data represented as arrays. For these categories
          ** we're checking the type and then deconstructing array with map
          ** adding every bolean to check array. If the data set is not
          ** an array, than we're simply checking the value and including the boolean
          ** in the check array.
          */
            typeof item[e].data === 'object'
              ? check.push(item[e].data
                .toString()
                .toLowerCase()
                .includes(this.state[e].toLowerCase()))
              : check.push(item[e].data.toLowerCase().includes(this.state[e].toLowerCase()));
          }
          return true;
        });
        return !check.includes(false);
      })
      .map((item) => {
        /* Once we have filtered item. We're creating a new object, which takes
        ** Data from the immutable systemsCatFixed. This is creating the final
        ** filtered data object used to present results of the filtering process.
        */
        const newObj = {};
        this.state.header.map((elem) => {
          newObj[elem] = item[elem];
          return true;
        });
        return newObj;
      });
    return this.setState({ systemsCat: filteredMultiple }, this.scrollAndSort(597));
  }

  scrollAndSort(destination) {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: destination,
    });
    /* eslint-disable no-unused-expressions */
    this.state.activeSorter ? this.handleSorting(this.state.activeSorter, this.state.sorter) : ';';
  }

  removeFilter(category) {
    const filters = [];
    this.state.filters.forEach(item => (item !== category ? filters.push(item) : ''));
    return this.setState({ filters });
  }

  removeAllFilters() {
    const keys = Object.keys(this.state.filtersValues);

    keys.forEach(item => delete this.state.filtersValues[item]);
  }

  clearFilters(filter = this.state.filters, range = 'all') {
    return filter.map((item) => {
      if (range === 'all') {
        this.removeAllFilters();
        this.handleChange('', '');
      }

      if (range !== 'all') {
        this.removeFilter(item);
        this.handleChange(item, '');
      }
      return true;
    });
  }

  handleChange(category, e) {
    const searchTerm = e;

    if (searchTerm !== '' && !this.state.filters.includes(category)) {
      this.state.filters.push(category);

      this.state.filtersValues[category] = searchTerm;
    }

    if (!searchTerm) {
      this.removeFilter(category);
      if (!category) {
        this.setState({ filters: [] });

        const clearedSystems = this.state.systemsCatFixed.map((item) => {
          /* eslint-disable no-return-assign */
          const newObj = {};
          this.state.header.map(elem => (newObj[elem] = item[elem]));
          return newObj;
        });

        return this.setState({ systemsCat: clearedSystems });
      }
    }

    return this.setState({ [category]: searchTerm }, () => {
      this.state.filtersValues[category] = searchTerm;
      this.filterTable(category);
    });
  }

  filterCategories(e) {
    // searchValue takes e.target.value and transforms it to lower case
    const searchValue = e.target.value.toLowerCase();

    // filteredHeader returns an Array of header labels filtered with searchValue
    const filteredHeader = this.state.headerFix.filter((item) => {
      const label = this.state.systemsFixed[0][item].label.toLowerCase();
      return label === 'company' || label === 'system' ? true : label.includes(searchValue);
    });
    // filteredSystems returns an object of systems filtered with searchValue
    const filteredSystems = this.state.systemsCat.map((item) => {
      // initialization of new object which will take filtered takes
      const newObj = {};

      filteredHeader.map((elem) => {
        if (item[elem] === undefined) {
          const company = item.company.data;
          const companyObj = this.state.systemsFixed.filter(x => x.company.data === company);
          newObj[elem] = companyObj[0][elem];
        }

        if (item[elem] !== undefined) {
          newObj[elem] = item[elem];
        }
        return true;
      });
      return newObj;
    });

    return this.setState({
      systemsCat: filteredSystems,
      header: filteredHeader,
    });
  }

  // SORTING. Two functions: handleSorting() and sortTable()

  handleSorting(category, sorter) {
    /**
     * handleSorting checks if user switched the sorting category
     * for example if sorting started at the 'company' field
     * but now user is sorting on the 'components field'
     * sorting must restart. HandleSorting checks this condition,
     * dispatches right states to the container and triggers
     * sortTable function, which is responsible for applying sorting
     */
    if (this.state.activeSorter && category !== this.state.activeSorter) {
      return this.setState({ sorter: 'def', activeSorter: category }, () => {
        this.sortTable(category, this.state.sorter);
      });
    }
    /**
     * if user continues to sort the same category, keep calling
     * sortTable with category and sorter passed from the component
     */
    return this.setState({ sorter, activeSorter: category }, () => {
      this.sortTable(category, sorter);
    });
  }

  sortTable(category, sorter) {
    /**
     * sortTable() sorts items according to the given sorter criterium (sorted)
     * available sorters:
     *  - az - alphabetical order
     *  - za - reversed alphabetical order
     *  - def - default order based on IDs from JSON
     */
    const sorted = this.state.systemsCat.sort((a, b) => {
      /**
       * In the JSON file pulled from the server, every category
       * has data field, which should be used for sorting
       */
      const dataA = a[category].data;
      const dataB = b[category].data;

      if (sorter === 'def') {
        /**
         * if current sorting is set to default (def)
         * change state to az and sort alphabetically
         */
        this.setState({ sorting: 'az' });
        return dataA < dataB ? -1 : dataA > dataB ? 1 : 0;
      } else if (sorter === 'az') {
        /**
         * if current sorting is set to alphapebtical order (az)
         * change state to za and reverse the alphabetically order
         */
        this.setState({ sorting: 'za' });
        return dataA > dataB ? -1 : dataA < dataB ? 1 : 0;
      } else if (sorter === 'za') {
        /**
         * if current sorting is set to reversed alphapebtical order (za)
         * change state to default (def) and sort based on IDs
         */
        this.setState({ sorting: 'def' });
        return a.company.id - b.company.id;
      }
      return true;
    });
    /**
     * After sorting items return systems to the systemsCat state
     * From now one data used by filter is sorter
     */
    return this.setState({ systemsCat: sorted, activeSorter: category });
  }

  // HANDLING STYLES ON SCROLL

  refreshContainer() {
    this.setState({ refresh: true });
  }

  fixHeader(wrapperOffset, topBarHeight) {
    const translate = `translate3d(0, ${window.scrollY - wrapperOffset + topBarHeight - 1}px, 0)`;
    return translate;
  }

  handleScroll() {
    const thead = document.getElementById('table-header');
    const container = document.getElementById('table-container');
    const wrapper = container.parentNode;
    const tableControls = wrapper.firstChild;

    const fixedCompanyHeader = document.getElementById('companyHeader');
    const fixedSystemHeader = document.getElementById('systemHeader');
    const fixedCompanyFilter = document.getElementById('companyFilter');
    const fixedSystemFilter = document.getElementById('systemFilter');
    const topBarHeight = document.getElementById('top-bar').getBoundingClientRect().height;

    const translate =
      this.props.scroll === true
        ? `translate3d(0, ${window.scrollY - wrapper.offsetTop + topBarHeight - 1}px, 0)`
        : 'none';
    tableControls.style.transform = translate;
    thead.style.transform = translate;
    fixedCompanyHeader.style.transform = translate;
    fixedSystemHeader.style.transform = translate;
    fixedCompanyFilter.style.transform = translate;
    fixedSystemFilter.style.transform = translate;

    if (thead.style.boxShadow === '' && this.props.scroll === true) {
      const shadow = '0px 20px 14px -2px rgba(21, 21, 21, .3)';
      thead.style.boxShadow = shadow;
      fixedCompanyFilter.style.boxShadow = shadow;
      fixedSystemFilter.style.boxShadow = shadow;
    } else if (thead.style.boxShadow !== '' && this.props.scroll === false) {
      const shadow = '';
      thead.style.boxShadow = shadow;
      fixedCompanyFilter.style.boxShadow = shadow;
      fixedSystemFilter.style.boxShadow = shadow;
    }
  }

  addHeaderShadow() {
    const shadow = '0px 20px 14px -2px rgba(21, 21, 21, .3)';
    return shadow;
  }

  addColumnShadow() {
    // this function adds a shadow to the edges of first two columns and headers
    const scroll = document.getElementById('table-container').scrollLeft;
    const systems = document.getElementsByClassName('fixed-system');
    const systemsArr = Array.from(systems);
    /* eslint-disable no-param-reassign */
    if (systems[0].style.boxShadow === '' && scroll > 30) {
      systemsArr.map((item) => {
        return (item.style.boxShadow = '22px 22px 14px -2px rgba(21, 21, 21, .2)');
      });
    } else if (systems[0].style.boxShadow !== '' && scroll < 30) {
      systemsArr.map((item) => {
        return (item.style.boxShadow = '');
      });
    }
  }

  moveTable(dir) {
    const node = document.getElementById('table-container');

    const tableWidth = node.children[0].scrollWidth;
    const containerWidth = node.offsetWidth;

    if (node.scrollLeft !== 0) {
      this.setState({ scrollerInactive: '' });
    }

    if (node.scrollLeft === 0) {
      this.setState({ scrollerInactive: 'left' });
    }

    if (node.scrollLeft === tableWidth - containerWidth + 2) {
      this.setState({ scrollerInactive: 'right' });
    }

    dir === 'right' ? (node.scrollLeft += 80) : (node.scrollLeft -= 80);
  }

  render() {
    if (!this.state.systemsJSON) {
      return <p>Loading...</p>;
    }
    return (
      <StyledTableContainer onScroll={() => this.addColumnShadow()}>
        <StyledControlsWrapper scroll={this.props.scroll} id="table-controls-wrapper">
          <TableControls
            moveTable={this.moveTable}
            filterSearch={this.filterCategories}
            scrollerInactive={this.state.scrollerInactive}
          />

          <FilterTagSection
            numberOfFilters={this.state.filters.length}
            getFilters={() => this.getFilterSelection()}
            clearFilters={() => this.clearFilters()}
          />
        </StyledControlsWrapper>

        <StyledTableWrapper id="table-container" scroll={this.props.scroll}>
          <Table
            dataf={this.state.systemsFixed}
            data={this.state.systemsCat}
            header={this.state.header}
            filter={this.handleChange}
            filtersValues={this.state.filtersValues}
            sort={this.handleSorting}
            sorting={this.state.sorting}
            activeSorter={this.state.activeSorter}
            fixedColumns={this.state.fixedColumns}
          />
        </StyledTableWrapper>
      </StyledTableContainer>
    );
  }
}

TableContainer.propTypes = {
  scroll: PropTypes.bool.isRequired,
  scrollUpdate: PropTypes.func.isRequired,
};
