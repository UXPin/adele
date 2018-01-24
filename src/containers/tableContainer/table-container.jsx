import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { table } from '../../style_tokens/tokens';
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
      /* Three states used for positioning
      ** of fixed header elements.
       */
      initialFiltersHeight: 0,
      systemsHeight: 0,
      fixedHeaderHeight: 0,
      /* State used for generating the right
      ** heights of rows
       */
      filteredCats: false,
      heights: [],
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
    this.refreshAfterFilterCat = this.refreshAfterFilterCat.bind(this);
  }

  componentWillMount() {
    const headerArr = Object.keys(data[0]);
    const fixedData = data.map((item, i) => {
      const system = item;
      system.company.id = i;
      return system;
    });
    /* unfixedHeader is used for generating data for columns
    ** that are not manually set us fixed with position absolute.
    ** This Array is passed directly to table and used by functions
    ** generating table.
    */

    this.setState({
      systemsFixed: data, // inmutable data object
      header: headerArr,
      headerFix: headerArr,
      systemsCat: fixedData,
      systemsCatFixed: fixedData,
      activeSorter: '',
    });
  }

  componentDidMount() {
    /* When user is scrolling the page, header of the table is getting
    ** fixed to make the data readable and accessible
    ** True or false values are passed through a callback to the parent.
    ** This is necessary to change styles in a sibling component (TableControls).
    ** Right column is fixed by a method in the Table component.
    */

    /* Dom elements used for fixed position calculations */
    const topBarHeight = document.getElementById('top-bar').getBoundingClientRect().height;
    const headerHeight = document.getElementById('header').getBoundingClientRect().height;
    const container = document.getElementById('table-container');
    const wrapper = container.parentNode;
    const wrapperOffset = wrapper.offsetTop;

    /* Header elements that has to be fixed */
    const tableControls = wrapper.firstChild;
    const thead = document.getElementById('table-header');
    const fixedCompanyHeader = document.getElementById('companyHeader');
    const fixedSystemHeader = document.getElementById('systemHeader');
    const fixedCompanyFilter = document.getElementById('companyFilter');
    const fixedSystemFilter = document.getElementById('systemFilter');

    /* Relayout trigger is represents the position
    ** when header of table should get fixed
    */
    const relayoutTrigger = headerHeight - topBarHeight;

    /* OnScroll function optimized for performance */

    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = (scrollPosition) => {
      if (scrollPosition >= relayoutTrigger && this.props.scroll === false) {
        this.props.scrollUpdate(true);
      } else if (scrollPosition >= relayoutTrigger && this.props.scroll === true) {
        /* Transform translate is used to keep the fixed position of the header */
        const translate = `translate3d(0, ${scrollPosition - wrapperOffset + topBarHeight}px, 0)`;
        const translateFilter = `translate3d(0, ${scrollPosition -
          wrapperOffset -
          3 +
          topBarHeight}px, 0)`;

        tableControls.style.transform = translate;
        thead.style.transform = translate;
        fixedCompanyHeader.style.transform = translate;
        fixedSystemHeader.style.transform = translate;
        fixedCompanyFilter.style.transform = translateFilter;
        fixedSystemFilter.style.transform = translateFilter;

        /* Add shadow to bottom part of the table header */
        thead.classList.add('thead-shadow');
        fixedCompanyFilter.classList.add('thead-shadow');
        fixedSystemFilter.classList.add('thead-shadow');
      } else if (scrollPosition < relayoutTrigger && this.props.scroll === true) {
        /* Table gets back to the original state below the relayout trigger */
        /* const translate = 'none';

        tableControls.style.transform = translate;
        thead.style.transform = translate;
        fixedCompanyHeader.style.transform = translate;
        fixedSystemHeader.style.transform = translate;
        fixedCompanyFilter.style.transform = translate;
        fixedSystemFilter.style.transform = translate; */

        /* Removes shadow from the bottom part of the table header */
        thead.classList.remove('thead-shadow');
        fixedCompanyFilter.classList.remove('thead-shadow');
        fixedSystemFilter.classList.remove('thead-shadow');
      }
    };

    window.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });

    /* Fix for correct position of the header */

    const fixedHeaderHeight =
      document.getElementById('companyHeader').getBoundingClientRect().height + 3;
    this.getFixedHeaderHeight(fixedHeaderHeight);

    const initialFiltersHeight = document
      .getElementById('table-controls-wrapper')
      .getBoundingClientRect().height;
    this.setInitialFiltersHeight(initialFiltersHeight);

    /* Saves height of all <td>'s to assure correct sizing of absolute table elements */
    this.setFixedCellsHeights(this.state.systemsCat);
    this.setFixedCellsWidths(this.state.systemsCat);

    window.addEventListener('resize', this.refreshContainer);
  }

  componentDidUpdate() {
    this.setFixedCellsWidths(this.state.systemsCat);
  }

  setFixedCellsHeights(systems) {
    /* Save heights in an array of {objects}
    ** structure: [{id: 0, company: 'shopify', height: 138, rawHeight: 78}]
    */
    const heights = [];

    systems.map((item) => {
      /* get company name */
      const company = item.company.data;
      /* Get company id */

      const id = item.company.id;
      /* Get object with system and save categories */
      const categories = Object.keys(item);
      /* save id's for a first category after 'company' and 'system' */
      const catId = `${id}${categories[2]}`;
      /* get height of catId */
      const nonFixedTd = document.getElementById(catId);
      /* if there are no non-fixed <td>'s then set height to a given number (148).
      ** This is necessary to keep a readable height of fixed cells.
      */
      const height = nonFixedTd === null ? 148 : nonFixedTd.offsetHeight;
      /* get tr padding */
      const tr = document.getElementById(id);
      // const trStyle = window.getComputedStyle(tr);
      /* Firefox doesn't return proper padding, so I had to go without
      ** hardcoded padding values.
       */
      const paddingTop = 30;
      const paddingBottom = 30;
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

  getFixedHeaderHeight(fixedHeaderHeight) {
    // I want to pass the right top style for filter tag, which differs from browser to browser
    // It should be a sum of height of table controls and hader <th>
    // The differences between browsers come from different understanding of the header height
    this.setState({ fixedHeaderHeight });
  }

  setInitialFiltersHeight(initialFiltersHeight) {
    this.setState({ initialFiltersHeight });
  }

  getFiltersSectionHeight(action) {
    /* For testing purposes. Issue with broken header */
    const filterSection = document.getElementById('table-controls-wrapper').getBoundingClientRect()
      .height;
    if (action === 'set') {
      this.setState({ filtersHeight: filterSection });
    } else if (action === 'reset') {
      this.setState({ filtersHeight: this.state.initialFiltersHeight });
    }
  }

  setFixedCellsWidths(systems) {
    /* Upon mounting of the component and any update
    ** I'm going to set the widths and positions of
    ** the absolutely positioned table cells.
    */

    /* DOM elements needed for calculations and setting the position */
    const fixedCompanyHeader = document.getElementById('companyHeader');
    const fixedCompanyFilter = document.getElementById('companyFilter');

    const fixedSystemHeader = document.getElementById('systemHeader');
    const fixedSystemFilter = document.getElementById('systemFilter');

    /* get height of the filtersControl and header */
    const filterSectionHeight = document
      .getElementById('table-controls-wrapper')
      .getBoundingClientRect().height;
    const fixedHeaderHeight = document.getElementById('companyHeader').getBoundingClientRect()
      .height;

    /* Map all the systems to set Heights for every cell */
    systems.map((system) => {
      /* get IDs of all available rows */
      const id = system.company.id;
      /* create IDs for cells */
      const idCompany = `${id}company`;
      // const idSystem = `${id}system`;
      /* get <tds> */
      const fixedCompany = document.getElementById(idCompany);
      // const fixedSystem = document.getElementById(idSystem);
      /* set left position for cells */
      fixedCompany.style.left = 0;
      /* get elements of the header */
      fixedCompanyHeader.style.left = 0;
      fixedCompanyFilter.style.left = 0;

      /* set left position for system header */
      const companyWidth = document.getElementById(`${id}company`).offsetWidth;
      fixedSystemHeader.style.left = `${companyWidth}px`;
      fixedSystemFilter.style.left = `${companyWidth}px`;

      return true;
    });

    /* Fix when table is empty */

    /* set top position for header */
    fixedCompanyHeader.style.top = `${filterSectionHeight}px`;
    fixedSystemHeader.style.top = `${filterSectionHeight}px`;

    fixedCompanyFilter.style.top = `${filterSectionHeight + fixedHeaderHeight + 3}px`;
    fixedSystemFilter.style.top = `${filterSectionHeight + fixedHeaderHeight + 3}px`;
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

    this.getFiltersSectionHeight('set');

    return this.setState(
      { systemsCat: filteredMultiple },
      () => this.setFixedCellsHeights(filteredMultiple),
      this.scrollAndSort(535, 'sort'),
    );
  }

  scrollAndSort(destination, sort) {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: destination,
    });
    /* eslint-disable no-unused-expressions */
    if (sort) {
      this.state.activeSorter
        ? this.handleSorting(this.state.activeSorter, this.state.sorter)
        : ';';
    }
  }

  removeFilter(category) {
    const filters = [];
    this.state.filters.forEach(item => (item !== category ? filters.push(item) : ''));
    return this.setState({ filters });
  }

  removeAllFilters() {
    const keys = Object.keys(this.state.filtersValues);
    this.getFiltersSectionHeight('reset');
    // keys.forEach(item => delete this.state.filtersValues[item]);
    keys.forEach((item) => {
      this.handleChange(item, '');
    });
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

    return this.setState(
      {
        systemsCat: filteredSystems,
        header: filteredHeader,
        filteredCats: true,
      },
      () => this.setFixedCellsHeights(this.state.systemsCat),
    );
  }

  refreshAfterFilterCat(state) {
    this.setState({ filteredCats: state });
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
      let dataA = a[category].data;
      let dataB = b[category].data;

      dataA = typeof dataA === 'object' ? dataA[0].toLowerCase() : dataA.toLowerCase();
      dataB = typeof dataB === 'object' ? dataB[0].toLowerCase() : dataB.toLowerCase();

      if (sorter === 'def') {
        /**
         * if current sorting is set to default (def)
         * change state to az and sort alphabetically
         */
        this.setState({ sorting: 'az' }, this.scrollAndSort(535));
        return dataA < dataB ? -1 : dataA > dataB ? 1 : 0;
      } else if (sorter === 'az') {
        /**
         * if current sorting is set to alphapebtical order (az)
         * change state to za and reverse the alphabetically order
         */
        this.setState({ sorting: 'za' }, this.scrollAndSort(535));
        return dataA > dataB ? -1 : dataA < dataB ? 1 : 0;
      } else if (sorter === 'za') {
        /**
         * if current sorting is set to reversed alphapebtical order (za)
         * change state to default (def) and sort based on IDs
         */
        this.setState({ sorting: 'def' }, this.scrollAndSort(535));
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
    const fixedHeaderHeight = document.getElementById('companyHeader').getBoundingClientRect()
      .height;
    this.getFixedHeaderHeight(fixedHeaderHeight);

    const filterSection = document.getElementById('table-controls-wrapper').getBoundingClientRect()
      .height;

    if (filterSection > this.state.initialFiltersHeight) {
      this.setState({ filtersHeight: filterSection });
    } else {
      this.setState({ filtersHeight: this.state.initialFiltersHeight });
    }
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
      const shadow = table.shadow.boxShadow;
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

  addColumnShadow() {
    // this function adds a shadow to the edges of first two columns and headers
    const scroll = document.getElementById('table-container').scrollLeft;
    const systems = document.getElementsByClassName('fixed-system');
    const systemsArr = Array.from(systems);
    /* eslint-disable no-param-reassign */
    /* Check if there's at least one item in the table */
    if (systems.length > 0) {
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
    return false;
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
    if (!this.state.systemsCat) {
      return <p>Loading...</p>;
    }
    return (
      <StyledTableContainer onScroll={() => this.addColumnShadow()}>
        <StyledControlsWrapper scroll={this.props.scroll} id="table-controls-wrapper">
          <FilterTagSection
            numberOfFilters={this.state.filters.length}
            getFilters={() => this.getFilterSelection()}
            clearFilters={() => this.clearFilters()}
          />
          <TableControls
            moveTable={this.moveTable}
            filterSearch={this.filterCategories}
            scrollerInactive={this.state.scrollerInactive}
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
            filtersHeight={this.state.filtersHeight}
            fixedHeaderHeight={this.state.fixedHeaderHeight}
            filteredCat={this.state.filteredCats}
            refreshAfterFilterCat={this.refreshAfterFilterCat}
            heights={this.state.heights}
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
