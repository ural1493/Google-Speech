import { Paper } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const Container = styled(Paper)`
  max-height: calc(100vh - 100px);

  & .MuiTable-root {
    height: 'max-content';
  }

  & .MuiTableCell-head {
    background-color: ${({ theme }) => theme.palette.primary.backgroundLight};
  }
  & .MuiTable-root {
    background-color: ${({ theme }) => theme.palette.primary.mainBackground};
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
