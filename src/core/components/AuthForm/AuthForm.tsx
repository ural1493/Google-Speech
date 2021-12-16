import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const AuthForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${MediaQueries.DesktopLarge} {
    gap: 3rem;
  }
`;
