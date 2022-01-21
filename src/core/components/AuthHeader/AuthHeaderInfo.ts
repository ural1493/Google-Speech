import { Typography } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const AuthHeaderInfo = styled(Typography)`
  &.MuiTypography-root {
    font-size: 4rem;
  }
  ${MediaQueries.DesktopLarge} {
    &.MuiTypography-root {
      font-size: 2rem;
    }
  }
`;
