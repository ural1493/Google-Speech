import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const AuthFormContainer = styled.div`
  position: relative;
  top: 120px;

  ${MediaQueries.DesktopLarge} {
    top: 40px;
  }
  ${MediaQueries.Desktop} {
    top: 15%;
  }
  ${MediaQueries.Mobile} {
    top: 10%;
  }
`;
