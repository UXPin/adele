import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash';

export function DataRow({ row }) {
  const {
    data,
    label,
    url,
  } = row;

  let value = data;

  if (isArray(data)) {
    value = data.join(', ');
  } else if (['yes', 'no'].includes(data)) {
    if (data === 'yes') {
      value = url ? (
        <span>
          yes | Go to
          {' '}
          <a className="link-gray" href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </span>
      ) : 'yes';
    } else {
      value = 'no';
    }
  } else if (url) {
    value = (
      <a className="link-gray" href={url} target="_blank" rel="noopener noreferrer">
        {data}
      </a>
    );
  }

  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
}

DataRow.propTypes = {
  row: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    label: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
