import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;

  & .MuiTypography-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    & .MuiTypography-root {
      font-size: 1.5rem;
    }
  }

  ${MediaQueries.Tablet} {
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }
`;
