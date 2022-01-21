import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';

export const MainImg = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 25px
    ${({ theme }) => theme.palette.boxShadowColor.mainImg};

  height: 450px;

  ${MediaQueries.DesktopLarge} {
    height: 230px;
  }

  ${MediaQueries.Mobile} {
    width: 300px;
    height: auto;
  }
`;
