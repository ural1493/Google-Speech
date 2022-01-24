import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const Dropdown = styled.div`
  display: flex;
  gap: 15px;

  & .MuiOutlinedInput-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    & .MuiOutlinedInput-root {
      font-size: 1rem;
    }
  }
`;
