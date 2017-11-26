import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input/input';
import Select from '../select/select';

const Filters = (props) => {
  /*
  * To decide whether <input> or <select> should be rendered
  * I'm creating an array of all the values for a given category of data
  * e.g. array of values for 'company' will include all the company names
  */
  const values = [];
  props.dataf.map((elem) => {
    /* eslint-disable prefer-destructuring */
    const data = elem[props.category].data;
    if (typeof data === 'object') {
      return data.map(item => values.push(item));
    }
    return values.push(elem[props.category].data);
  });
  /*
  * Based on the values I'm creating a unique set for a given category.
  * Set of uniques is going to be used to decide whether there's too many
  * options to be includen a <select> and therefore <input should be rendered.
  * Set of unique values is also used to generatie <options> for <selects>
  */
  const uniques = {};
  uniques[props.category] = {};
  const set = new Set(values);
  uniques[props.category].size = set.size;
  uniques[props.category].values = [];
  set.forEach((e) => {
    uniques[props.category].values.push(e);
  });
  /*
    * If number of uniques is higher than 3 a function getSelect() is called.
    * This function returns select with unique options for every category
    */
  const getSelect = (item, uniqueProperties) => {
    const options = uniqueProperties[item].values.sort((a, b) => {
      const dataA = a.toLowerCase();
      const dataB = b.toLowerCase();

      if (dataA === 'no') {
        return 1;
      }

      if (dataB === 'no') {
        return -1;
      }
      /* eslint-disable no-nested-ternary */
      return dataA < dataB ? -1 : dataA > dataB ? 1 : 0;
    });

    return (
      <Select
        id={item}
        key={item}
        options={options}
        tab={props.tab}
        value={props.values[props.category] ? props.values[props.category] : ''}
        action={(e) => {
          props.filter(item, e.target.value);
        }}
      />
    );
  };

  return uniques[props.category].size > 6 ? (
    <Input
      controlled
      key={props.category}
      id={props.category}
      name={props.category}
      type="text"
      color="dark"
      placeholder="Type to filter..."
      autoComplete="off"
      tab={props.tab}
      action={(e) => {
        props.filter(props.category, e.target.value);
      }}
      value={props.values[props.category] ? props.values[props.category] : ''}
    />
  ) : (
    getSelect(props.category, uniques)
  );
};
/* eslint-disable react/forbid-prop-types */
/* some of the props expect dynamically built objects
** hence - PropTypes.object. Describing the structure of
** data would be impossible and limiting.
*/
Filters.propTypes = {
  dataf: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  tab: PropTypes.number,
};

Filters.defaultProps = {
  tab: 0,
};

export { Filters as default };
