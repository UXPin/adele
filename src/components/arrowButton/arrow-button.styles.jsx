import styled from 'styled-components';
import { interactive } from '../../style_tokens/tokens';

const StyledArrowButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  padding: 0;

  &:focus{
    > span > svg {
      fill: ${interactive.colorActive};
    }
  }
`;

export { StyledArrowButton as default };
