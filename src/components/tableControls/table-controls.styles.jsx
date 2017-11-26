import styled from 'styled-components';
import { tableControls } from '../../style_tokens/tokens';

const StyledTableControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  width: 400px;
  min-width: 400px;
`;

const StyledMoveLabel = styled.span`
  margin: 0 10px;

  &:last-of-type {
    margin-left: 25px;
  }

  font-family: ${tableControls.fontFamily};
  font-size: ${tableControls.size};
  color: ${tableControls.color};
  font-weight: ${tableControls.weight};
`;

export { StyledTableControlsWrapper, StyledMoveLabel };
