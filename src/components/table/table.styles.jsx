import styled from 'styled-components';
import { table } from '../../style_tokens/tokens';

/* Styles for Table Component
** Table is by the most complex component creared for Adele.
** Its dynamic changes requried direct access to DOM and classic CSS
** modifications and tricks.
*/

const StyledTable = styled.table`
  display: table;
  border-spacing: 0;
  /* margin-top: 10px; */
  background-color: ${table.colors.background};
  font-family: ${table.typography.fontFamily};
  color: ${table.typography.color};
  text-transform: capitalize;

  .fixed {
    position: absolute;
    width: 142px;
  }

  th,
  td {
    border-right: 1px solid ${table.colors.border};
  }
`;

const StyledExternalLink = styled.a`
  display: flex;
  align-items: flex-start;
  color: ${table.typography.color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${table.typography.hoveredLink};
    span > svg {
      fill: ${table.typography.hoveredLink};
      transition: all ease-in 0.2s;
    }
    transition: all ease-in 0.2s;
  }
  svg {
    margin-top: 3px;
    margin-right: 4px;
  }
`;

const StyledThead = styled.thead`
  background-color: ${table.colors.background};
  will-change: transform;
  will-change: box-shadow;
  &:not(#fixedHeader) {
    tr:first-of-type {
      height: 50px;
    }
    tr:last-of-type {
      height: 90px;
    }
  }
`;

const StyledHeaderTr = styled.tr`
  /* Potentially not needed */
`;

const StyledTh = styled.th`
  padding: ${table.space.cellPaddingBottom} ${table.space.cellPadding} 0 ${table.space.cellPadding};
  background-color: ${table.colors.background};
  border-bottom: 2px solid ${table.colors.background};

  font-size: ${table.typography.sizeHeader};
  font-weight: ${table.typography.weightThin};

  white-space: nowrap;
`;

const StyledThWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLabel = styled.span`
  margin-right: ${table.space.separator};
`;

const StyledFiltersTr = styled.tr`
  /* Specific styles for Filters Row */
  > th {
    padding-right: ${table.space.cellPadding};
    padding-left: ${table.space.cellPadding};
    padding-bottom: ${table.space.cellPaddingBottom};
    will-change: transform;
    will-change: box-shadow;
  }
  [id$='Filter'] {
    border-bottom: 1px solid ${table.colors.border};
  }
`;

const StyledTbody = styled.tbody`
  /* Effect on the hovered row */
  tr {
    /* tr height is only used when there's no content in the table */
    height: 70px;
    &:hover {
      td,
      .fixed.fixed-system {
        background-color: ${table.colors.hover} !important;
        transition: all ease-in 0.1s;
      }
    }
    td {
      &:nth-of-type(2) {
        p {
          font-weight: 400;
        }
      }
    }
  }
  > tr td {
    font-size: 14px;
    font-weight: 100;

    padding: 0;
    min-width: 140px;
    padding: ${table.space.cellPadding};
    background-color: ${table.colors.background};

    p,
    a {
      width: 140px;
      padding: 0;
      margin: 0;
      line-height: 20px;
    }

    ul {
      white-space: nowrap;
      display: block;
      margin: 0;
      padding: 0;

      list-style: none;

      line-height: 23px;
    }
  }
  > tr > td:first-child {
    font-weight: 600;
  }

  > tr:nth-of-type(2n + 1) {
    > td {
      background-color: ${table.colors.evenRow};
    }
  }
`;

const StyledPlaceholder = styled.th`
  width: 143px;
  color: ${table.colors.background};
`;

export {
  StyledTable,
  StyledTbody,
  StyledThead,
  StyledTh,
  StyledHeaderTr,
  StyledThWrapper,
  StyledLabel,
  StyledFiltersTr,
  StyledExternalLink,
  StyledPlaceholder,
};
