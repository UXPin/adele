import styled from 'styled-components';
import background from '../../assets/background.png';

const StyledInfoArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center 80px;
`;

export { StyledInfoArticle as default };
