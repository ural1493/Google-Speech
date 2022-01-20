import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const MainImg = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 25px rgb(118 118 118 / 25%);

  height: 450px;

  ${MediaQueries.DesktopLarge} {
    width: 390px;
    height: 260px;
  }

  ${MediaQueries.Mobile} {
    width: 300px;
    height: auto;
  }
`;
