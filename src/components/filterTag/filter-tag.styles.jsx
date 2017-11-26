import styled from 'styled-components';
import { filterTag } from '../../style_tokens/tokens';

/* Container for all the elements of the filter tag */
const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 10px 10px 0;
`;

const StyledLabel = styled.span`
  margin-right: 10px;
  color: ${filterTag.typography.color};
  text-transform: capitalize;
`;

const StyledValue = styled.span`
  max-width: 170px;
  color: ${filterTag.typography.color};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledFilter = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  max-width: 180px;
  min-height: 34px;
  padding: 0 10px;
  background-color: white;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px ${filterTag.colors.borderColor};
  border-radius: ${filterTag.border.radius};
  outline: none;
`;

const StyledCloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-left: 3px;

  &:focus {
    svg {
      fill: ${filterTag.colors.focusColor};
    }
  }
`;

export { StyledLabel, StyledFilter, StyledValue, StyledFilterContainer, StyledCloseButton };
