import styled from 'styled-components';
import { table } from '../../style_tokens/tokens';

/* Styles for Table Component
** Table is by the most complex component creared for Adele.
** Its dynamic changes requried direct access to DOM and classic CSS
** modifications and tricks.
*/

/* Locally used variable. Adjusts the width of two first columns
** and placeholders
*/
const fixedColumnsWidth = 220;
const paddingInt = parseInt(table.space.cellPadding, 0);

const StyledTable = styled.table`
  display: table;
  border-spacing: 0;
  background-color: ${table.colors.background};
  font-family: ${table.typography.fontFamily};
  color: ${table.typography.color};
  /* Fix for font legibility when elements of the table
  ** are animated or placed in position absolute.
  ** Safari messes up font-weight, so I have to completely
  ** restart the weight and set it up with a higher parameter
   */
  font-weight: ${table.typography.weightRegular};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;

  .fixed {
    position: absolute;
    text-transform: capitalize;
    height: inherit;
  }

  .thead-shadow {
    box-shadow: 0px 20px 14px -2px rgba(21, 21, 21, 0.3);
  }

  th,
  td {
    border-right: 1px solid ${table.colors.border};
  }
`;

const StyledExternalLink = styled.a`
  display: flex;
  color: ${table.typography.color};
  text-decoration: none;

  padding-left: ${table.space.cellPadding};
  padding-right: ${table.space.cellPadding};
  &:hover {
    color: ${table.typography.hoveredLink};
    text-decoration: underline;
    span > svg {
      fill: ${table.typography.hoveredLink};
    }
  }
  span {
    display: flex;
    align-items: center;
    height: 24px;
    width: 14px;
    margin-right: 3px;
  }
`;

const StyledThead = styled.thead`
  background-color: ${table.colors.background};
  will-change: transform;
  will-change: box-shadow;
  text-transform: capitalize;
  &:not(#fixedHeader) {
    tr:first-of-type {
      height: 5px;
    }
    tr:last-of-type {
      height: 90px;
    }
  }
  .fixed {
    width: ${fixedColumnsWidth - 1 - 2 * paddingInt}px;
  }
`;

const StyledHeaderTr = styled.tr``;

const StyledTh = styled.th`
  padding: ${table.space.cellPaddingBottom} ${table.space.cellPadding} 0 ${table.space.cellPadding};
  background-color: ${table.colors.background};
  border-bottom: 0px solid ${table.colors.background};

  font-size: ${table.typography.sizeHeader};
  font-weight: ${table.typography.weightRegular};

  white-space: nowrap;
`;

const StyledThWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  /* Positioning for sorting buttons */
  div {
    button {
      margin-left: -9px;
    }
  }
`;

const StyledLabel = styled.span`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
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
    box-sizing: padding-box;
    border-bottom: 2px solid;
  }
  [id$='Filter'] {
    border-bottom: 1px solid ${table.colors.border};
  }
`;

const StyledTbody = styled.tbody`
  tr {
    /* Height affects all the rows */
    /*min-height: 24px;*/
    padding: 30px 0 30px 0;
    /* Effect on the hovered row */
    &:hover {
      td,
      .fixed.fixed-system {
        background-color: ${table.colors.hover} !important;
        transition: all ease-in 0.1s;
      }
    }
  }
  /* styles for fixed columns in the tbody */
  [id*='system'],
  [id*='company'] {
    width: ${fixedColumnsWidth}px;
  }
  > tr td {
    min-width: 180px;
    max-width: 240px;
    box-sizing: border-box;
    vertical-align: middle;
    padding: inherit;
    div {
      /*min-height: 48px;*/
    }

    background-color: ${table.colors.background};

    font-size: ${table.typography.sizeRegular};

    word-wrap: break-word;

    .cell-wrapper {
      display: flex;
      align-items: center;
    }

    p,
    a {
      margin: 0;
      padding-left: ${table.space.cellPadding};
      padding-right: ${table.space.cellPadding};
      line-height: 24px;
    }

    ul {
      display: block;
      margin: 0;
      padding: 0;

      list-style: none;

      white-space: normal;
      li {
        padding-left: ${table.space.cellPadding};
        padding-right: ${table.space.cellPadding};
        padding-bottom: 3px;
        line-height: 24px;
        &:last-of-type {
          padding-bottom: 0;
        }
        a {
          padding: 0px;
        }
      }
    }
  }

  > tr:nth-of-type(2n + 1) {
    > td {
      background-color: ${table.colors.evenRow};
    }
  }
`;

const StyledPlaceholder = styled.th`
  width: ${fixedColumnsWidth - 32 - 1}px;
  min-width: ${fixedColumnsWidth - 32 - 1}px;
  color: ${table.colors.background};
`;

const StyledEmptyMessageTr = styled.tr`
  #empty-message {
    div {
      font-weight: ${table.typography.weightRegular};
      margin-left: 20px;
      a {
        color: white;
        margin: 0;
        padding: 0;
      }
    }
    &:hover {
      background-color: ${table.colors.evenRow} !important;
    }
  }
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
  StyledEmptyMessageTr,
};
