import styled from 'styled-components';
import { navLink } from '../../style_tokens/tokens';

const StyledNavLink = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: none;
  font-family: ${navLink.fontFamily};
  font-size: ${navLink.size};
  color: ${navLink.color};
  font-weight: ${navLink.weight};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: all ease-in 0.2s;
  }
  &:focus {
    color: ${navLink.colorActive};
  }
`;

export { StyledNavLink as default };
