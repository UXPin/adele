import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash';
import { useParams, Redirect } from 'react-router-dom';

import SectionHeader from '../../components/sectionHeader/section-header';
import StyledHeaderContainer from '../headerContainer/header-container.styles';
import TopBar from '../../components/topBar/top-bar';
import { getRow } from '../../services/data';

const DATA_TABLE = [
  {
    title: 'Technology',
    rows: [
      'codeDepth',
      'components',
      'js',
      'ts',
      'webComponents',
      'tests',
      'linter',
      'css',
      'cssInjs',
      'designTokens',
      'bundleManager',
      'distribution',
    ],
  },
  {
    title: 'Design',
    rows: [
      'uiKit',
      'brandGuidelines',
      'colorPalette',
      'colorNaming',
      'contrastAnalysis',
      'typography',
      'icons',
      'space/Grid',
      'illustrations',
      'dataVisualization',
      'animation',
      'voiceTone',
    ],
  },
  {
    title: 'Documentation & guidelines',
    rows: [
      'accessibilityGuidelines',
      'designPrinciples',
      'websiteDocumentation',
      'codeDocumentation',
      'storybook',
    ],
  },
];

export default function DetailsPage() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams();
  const data = getRow(id);

  if (!data) {
    return (
      <Redirect to="/" />
    );
  }

  console.log(data);

  const header = `what does ${data.company.data}'s design system include?`;

  return (
    <div>
      <StyledHeaderContainer id="header">
        <TopBar />
      </StyledHeaderContainer>
      <h1>
        <small>The</small>
        {data.company.data}
        <small>design system is called</small>
        {data.system.data}
      </h1>
      <p>
        website:
        {data.websiteDocumentation.url}
      </p>
      <p>
        repository
        {data.repository.url}
      </p>
      <SectionHeader content={header} id="uxpin-info" />
      {
        DATA_TABLE.map(({ title, rows }) => (
          <SectionData title={title} key={title}>
            {
              rows.map((row) => <DataRow row={data[row]} key={row} />)
            }
          </SectionData>
        ))
      }
    </div>
  );
}

function DataRow({ row }) {
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
      value = url ? `yes | Go to ${label}` : 'yes';
    } else {
      value = 'no';
    }
  } else if (url) {
    value = `a => ${data}`;
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

function SectionData({
  children,
  title,
}) {
  return (
    <section>
      <strong>
        {title}
      </strong>
      <table>
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
