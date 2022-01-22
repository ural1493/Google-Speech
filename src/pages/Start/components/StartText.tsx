import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const StartText = styled.p`
  max-width: 600px;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 300;
  color: ${(props) => props.theme.palette.text.secondary};
  opacity: 0.8;
  text-align: center;
  padding: 15px;

  ${MediaQueries.DesktopLarge} {
    font-size: 1.5rem;
  }
`;
