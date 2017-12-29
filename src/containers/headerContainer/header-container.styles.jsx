import styled from 'styled-components';
import background from '../../assets/background.png';

const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 6000;
  margin: 0 auto;
  width: 90%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
`;

export { StyledHeaderContainer as default };
