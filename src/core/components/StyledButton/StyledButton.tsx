import { Button } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    background-color: ${(props) => props.theme.palette.primary.main};
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.mainDark};
    }

    ${MediaQueries.Mobile} {
      font-size: 1rem;
      margin-top: 1.2rem;
    }
    ${MediaQueries.Laptop} {
      margin-top: 1.5rem;
      font-size: 1.2rem;
    }
    ${MediaQueries.Desktop} {
      font-size: 2rem;
    }
    ${MediaQueries.DesktopLarge} {
      font-size: 3rem;
    }
  }
`;
