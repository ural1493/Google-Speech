import { Paper } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const Container = styled(Paper)`
  padding: 5px;
  &.MuiPaper-root {
    background-color: ${({ theme }) => theme.palette.primary.backgroundLight};
  }
  & .MuiTable-root {
    background-color: white;
  }

  & .MuiTableCell-root {
    font-size: 2rem;
    ${MediaQueries.DesktopLarge} {
      font-size: 1.5rem;
    }
    ${MediaQueries.Tablet} {
      font-size: 1rem;
    }
  }
`;
