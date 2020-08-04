import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash';

function IconYes() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="table-icon" viewBox="0 0 3.93 2.86">
      <use href="#tick" fill="#323335" />
    </svg>
  );
}

function IconNo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="table-icon" viewBox="0 0 3.06 3.06">
      <use href="#cross" fill="#323335" />
    </svg>
  );
}

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
          {IconYes()}
          <span className="ml-1 pl-1">
            Go to
            {' '}
            <a className="link-gray" href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </span>
        </span>
      ) : IconYes();
    } else {
      value = IconNo();
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
      <td className="no-border" />
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
    url: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};
