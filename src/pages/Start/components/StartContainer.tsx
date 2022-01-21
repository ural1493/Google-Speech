import styled from 'styled-components';
import bg from '../../../assets/bg-google-speech.png';
import { Button } from '../../../core/components/Button/Button';

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  ${Button} {
    width: 200px;
    color: ${({ theme }) => theme.palette.primary.backgroundWhite};
  }
`;
