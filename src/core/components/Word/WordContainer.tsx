import styled from 'styled-components';

export const WordContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px;
  border: 1px solid ${(props) => props.theme.palette.border.wordContainer};
  border-radius: 5px;
  transition: 0.3s;
  max-width: 300px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px 0
      ${(props) => props.theme.palette.boxShadowColor.word};
  }
`;
