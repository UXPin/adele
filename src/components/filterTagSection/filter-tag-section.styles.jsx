import styled from 'styled-components';
import { filterTag } from '../../style_tokens/tokens';

const StyledFilterTagSection = styled.section`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  width: 90%;
  font-family: ${filterTag.typography.fontFamily};
  font-size: ${filterTag.typography.size};
`;

const StyledClearButton = styled.button`
  margin: 10px 0 10px 10px;
  color: ${filterTag.colors.danger};
  font-size: 10px;
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledFilterTagSection, StyledClearButton };
