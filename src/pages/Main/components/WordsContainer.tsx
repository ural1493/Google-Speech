import styled from 'styled-components';
import { WordContainer } from '../../../core/components/Word/WordContainer';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const WordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  & .MuiTypography-root {
    font-size: 2rem;
  }

  ${WordContainer} {
    width: 400px;

    ${MediaQueries.DesktopLarge} {
      width: 250px;

      & .MuiTypography-root {
        font-size: 1rem;
      }
    }

    ${MediaQueries.Tablet} {
      width: 200px;

      & .MuiTypography-root {
        font-size: 0.8rem;
      }
    }
    ${MediaQueries.Mobile} {
      width: 90%;
    }
  }
`;
