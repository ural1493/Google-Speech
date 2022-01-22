import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const StartHeader = styled.h2`
  color: ${(props) => props.theme.palette.text.header};
  text-align: center;
  font-size: 4rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 13px;
  font-weight: 300;

  ${MediaQueries.DesktopLarge} {
    font-size: 3rem;
  }
`;
