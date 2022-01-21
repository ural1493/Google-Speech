import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 20px;
  position: absolute;
  right: 20px;

  ${MediaQueries.Laptop} {
    position: static;
  }
`;
