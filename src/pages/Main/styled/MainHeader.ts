import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const MainHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  width: 100%;

  ${MediaQueries.Mobile} {
    flex-direction: column-reverse;
  }
`;
