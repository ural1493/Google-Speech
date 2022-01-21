import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const TranscriptContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.wordContainer};
  width: 400px;

  & .MuiTypography-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    width: 300px;
    & .MuiTypography-root {
      font-size: 1.5rem;
    }
  }

  ${MediaQueries.Tablet} {
    width: 200px;
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }
`;
