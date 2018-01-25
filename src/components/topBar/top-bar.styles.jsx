import styled from 'styled-components';
import { brand } from '../../style_tokens/tokens';

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  top: 0;
  margin-top: 0;
  width: 90%;
  height: 80px;
  background-color: ${props => (props.scroll === true ? 'white' : '')};
`;

const StyledBrand = styled.figure`
  display: flex;
  align-items: center;
  margin-left: ${props => (props.scroll === true ? '100px' : '4px')};

  &::before {
    content: 'by';
    display: ${props => (props.scroll === true ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    left: 74px;
    opacity: ${props => (props.scroll === true ? 1 : 0)};
    font-family: ${brand.typography.fontFamily};
    font-size: ${brand.typography.sizeRegular};
    color: ${brand.typography.colorRegular};
    font-weight: ${brand.typography.weightRegular};
  }

  &::after {
    content: 'Adele';
    display: ${props => (props.scroll === true ? 'block' : 'none')};
    position: absolute;
    top: 25px;
    left: 10px;
    opacity: ${props => (props.scroll === true ? 1 : 0)};
    font-family: ${brand.typography.fontFamily};
    font-size: ${brand.typography.sizeHeader};
    color: ${brand.typography.colorHeader};
    font-weight: bold;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  figcaption {
    opacity: ${props => (props.scroll === true ? 0 : 1)};
    margin-left: 10px;
    margin-top: -3px;
    font-family: ${brand.typography.fontFamily};
    font-size: ${brand.typography.sizeRegular};
    color: ${brand.typography.colorRegular};
    font-weight: ${brand.typography.weightRegular};

    a {
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.5s ease-in;

      &:active,
      &:visited,
      &:link,
      &:focus {
        color: ${brand.typography.colorRegular};
      }

      &:hover {
        color: ${brand.typography.color};
        border-bottom: 1px solid ${brand.typography.colorRegular};
      }
    }
  }
`;

export { StyledTopBar, StyledBrand };
