/* eslint-disable */
import styled from 'styled-components';

const StyledTableContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;

  position: relative;

  left: -1px;

  margin: 0 auto 0 auto;

  width: 90%;
  overflow: hidden;
`;

const StyledTableWrapper = styled.article`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* margin-top: ${props => (props.scroll === true ? '340px' : '')}; */
  >table >thead >tr th:nth-of-type(-n + 2) {
    will-change: transform;
    will-change: box-shadow;
  }
  >table >tbody >tr td:nth-of-type(-n + 2) {
    will-change: transform;
    will-change: box-shadow;
  }
`;
const StyledControlsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100.1%; /* Additional .1% helps dealing with weird FF calculations */
  z-index: 20000;

  background: white;
  min-height: 80px;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 600px;
    bottom: 0;
    background-color: white;
  }
`;

export { StyledTableContainer, StyledTableWrapper, StyledControlsWrapper };
