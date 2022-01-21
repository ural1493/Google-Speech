import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  ${MediaQueries.Mobile} {
    flex-direction: column;
  }
`;
