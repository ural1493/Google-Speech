import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';
import { TextContainer } from '../Word/TextContainer';
import { WordContainer } from '../Word/WordContainer';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  border-radius: 20px;

  width: 70%;
  padding: 60px 120px;
  & .MuiTypography-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    width: 70%;
    padding: 20px 100px;
    overflow: auto;
    & .MuiTypography-root {
      font-size: 1.5rem;
    }
  }

  ${MediaQueries.Tablet} {
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }

  ${WordContainer} {
    width: 500px;
    justify-content: flex-start;
    ${MediaQueries.DesktopLarge} {
      width: 400px;
    }
    ${MediaQueries.Tablet} {
      width: 100%;
    }
  }

  ${TextContainer} {
    flex-direction: row;
    & .MuiFormControlLabel-root {
      display: none;
    }
  }

  ${MediaQueries.Mobile} {
    padding: 10px 20px;
    width: 90%;
  }
`;
