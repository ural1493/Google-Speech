import styled from 'styled-components';
import { MediaQueries } from '../../../core/constants/mediaQueries';
import { TextContainer } from '../../../core/components/Word/TextContainer';
import { WordContainer } from '../../../core/components/Word/WordContainer';
import { AbsoluteCenter } from '../../../core/styles/AbsoluteCenter';

export const ModalContainer = styled.div`
  ${AbsoluteCenter}
  background-color: ${({ theme }) => theme.palette.primary.backgroundWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  border-radius: 20px;
  width: 70%;
  height: 70%;
  padding: 60px;
  & .MuiTypography-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    & .MuiTypography-root {
      font-size: 1rem;
    }
  }

  ${MediaQueries.Laptop} {
    padding: 20px;
    & .MuiTypography-root {
      font-size: 0.8rem;
    }
  }

  ${WordContainer} {
    width: 500px;
    justify-content: flex-start;
    ${MediaQueries.DesktopLarge} {
      width: 400px;
    }
    ${MediaQueries.Desktop} {
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
