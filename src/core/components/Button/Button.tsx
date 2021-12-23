import { Button as ButtonComponent } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const Button = styled(ButtonComponent)`
  &.MuiButton-root {
    background-color: ${(props) => props.theme.palette.primary.main};
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.mainDark};
    }
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 2.5rem;
    // min-width: 200px;
    max-width: 200px;
    ${MediaQueries.DesktopLarge} {
      font-size: 2rem;
    }

    ${MediaQueries.Desktop} {
      font-size: 1.5rem;
    }

    ${MediaQueries.Laptop} {
      font-size: 1.2rem;
    }
  }
`;
