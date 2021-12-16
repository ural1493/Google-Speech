import { Typography } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const Heading = styled(Typography)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.secondary};
  padding: 1rem;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &.MuiTypography-root {
    margin-bottom: 3rem;
    font-size: 2rem;

    ${MediaQueries.Mobile} {
      font-size: 3rem;
      padding: 1.2rem;
      margin-bottom: 4rem;
    }
    ${MediaQueries.Laptop} {
      font-size: 4rem;
      padding: 1.5rem;
      margin-bottom: 4rem;
    }
    ${MediaQueries.Desktop} {
      font-size: 4rem;
      padding: 2rem;
      margin-bottom: 5rem;
    }
    ${MediaQueries.DesktopLarge} {
      font-size: 6rem;
      padding: 2.5rem;
      margin-bottom: 6rem;
    }
  }
`;
