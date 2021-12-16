import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const AuthForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;

  ${MediaQueries.DesktopLarge} {
    gap: 3rem;
    margin-top: 3rem;
  }
  ${MediaQueries.Laptop} {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;
