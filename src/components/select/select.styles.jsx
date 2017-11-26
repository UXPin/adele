import styled from 'styled-components';
import { inputs } from '../../style_tokens/tokens';
import { chevron } from '../../icons/chevron_base64';

const StyledSelect = styled.select`
  appearance: none;
  outline: none;
  width: 100%;
  min-width: 120px;
  height: 29px;
  padding: 0 ${inputs.space.padding} 0 calc(${inputs.space.padding} * 1.4);
  background: ${inputs.colors.background} ${chevron} no-repeat;
  background-position-x: 94%;
  background-position-y: 50%;
  border: 1px solid ${inputs.border.colorDark};
  border-radius: ${inputs.border.radius};
  font-family: ${inputs.typography.fontFamily};
  font-weight: ${inputs.typography.weight};
  font-style: italic;
  color: white;
  font-size: ${inputs.typography.size};
  line-height: 26px;

  &:focus {
    border: 1px solid ${inputs.colors.outline};
  }
`;

export { StyledSelect as default };
