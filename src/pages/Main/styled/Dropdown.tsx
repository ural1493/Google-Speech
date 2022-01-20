import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const Dropdown = styled.div`
  & .MuiOutlinedInput-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    & .MuiOutlinedInput-root {
      font-size: 1.5rem;
    }
  }
  ${MediaQueries.Tablet} {
    & .MuiOutlinedInput-root {
      font-size: 1rem;
    }
  }
`;
