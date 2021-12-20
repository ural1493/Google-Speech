import { Typography } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const Heading = styled(Typography)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.secondary};

  box-shadow: 4px 4px 8px 0px
    ${(props) => props.theme.palette.boxShadowColor.heading};

  &.MuiTypography-root {
    font-size: 6rem;
    padding: 2.5rem;
    margin-bottom: 6rem;

    ${MediaQueries.DesktopLarge} {
      font-size: 5rem;
      padding: 2rem;
      margin-bottom: 4rem;
    }

    ${MediaQueries.Desktop} {
      font-size: 4rem;
      margin-bottom: 3rem;
    }

    ${MediaQueries.Laptop} {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    ${MediaQueries.Mobile} {
      font-size: 3rem;
      padding: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;
