import { Link as LinkComponent } from 'react-router-dom';
import styled from 'styled-components';
import { MediaQueries } from '../../../constants/mediaQueries';

export const Link = styled(LinkComponent)`
  color: inherit;
  font-size: 3rem;
  ${MediaQueries.DesktopLarge} {
    font-size: 2rem;
  }
  ${MediaQueries.Laptop} {
    font-size: 1.5rem;
  }
`;
