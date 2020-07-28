import React from 'react';
import { Link } from 'react-router-dom';
import { clearKey } from '../../helpers/text';

export default function generateInternalLinkCell(value) {
  const to = clearKey(value);

  return (
    <Link to={to}>
      {value}
    </Link>
  );
}
