import { TextField as TextFieldComponent } from '@mui/material';
import styled from 'styled-components';
import { MediaQueries } from '../../constants/mediaQueries';

export const TextFiled = styled(TextFieldComponent)`
  & .MuiInputBase-root {
    font-size: 3rem;
  }
  & .MuiInputLabel-root {
    font-size: 2rem;
  }
  & .MuiFormHelperText-root {
    font-size: 2rem;
  }

  ${MediaQueries.DesktopLarge} {
    width: 400px;

    & .MuiInputBase-root {
      font-size: 1rem;
    }
    & .MuiInputLabel-root {
      font-size: 1rem;
    }
    & .MuiFormHelperText-root {
      font-size: 1rem;
    }
  }

  ${MediaQueries.Mobile} {
    width: 80%;

    & .MuiInputBase-root {
      font-size: 1.2rem;
    }
    & .MuiInputLabel-root {
      font-size: 1rem;
    }
    & .MuiFormHelperText-root {
      font-size: 1rem;
    }
  }
`;
