import styled from 'styled-components';
import { AbsoluteCenter } from '../../styles/AbsoluteCenter';
import { FlexCenter } from '../../styles/FlexCenter';

export const ModalContainer = styled.div`
  ${AbsoluteCenter}
  ${FlexCenter}
  flex-direction: column;

  background-color: ${({ theme }) => theme.palette.primary.backgroundWhite};
  gap: 20px;
  padding: 30px;
  max-width: 50%;
  max-height: 50%;
  border-radius: 15px;
`;
