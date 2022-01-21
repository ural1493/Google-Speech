import { Typography } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const Heading = styled(Typography)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.secondary};

  box-shadow: 4px 4px 8px 0px
    ${(props) => props.theme.palette.boxShadowColor.heading};

  &.MuiTypography-root {
    font-size: 4rem;
    padding: 40px;
    margin-bottom: 20px;

    ${MediaQueries.DesktopLarge} {
      font-size: 3rem;
      padding: 20px;
    }

    ${MediaQueries.Mobile} {
      font-size: 3rem;
      padding: 20px;
      margin-bottom: 10px;
    }
  }
`;
