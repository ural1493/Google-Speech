import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 30px;

  ${MediaQueries.DesktopLarge} {
    gap: 30px;
    margin-top: 20px;
  }
  ${MediaQueries.Laptop} {
    gap: 20px;
  }
`;
