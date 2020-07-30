import React from 'react';
import PropTypes from 'prop-types';

export function SectionData({
  children,
  title,
}) {
  return (
    <section className="properties">
      <strong className="h2">
        {title}
      </strong>
      <table className="properties-table">
        <tbody>
          {children}
        </tbody>
      </table>
    </section>
  );
}

SectionData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string,
};

SectionData.defaultProps = {
  title: '',
};
