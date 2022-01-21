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
    padding: 15px 20px;

    ${MediaQueries.DesktopLarge} {
      font-size: 1rem;
      padding: 10px 15px;
    }
  }
`;
