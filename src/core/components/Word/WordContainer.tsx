import styled from 'styled-components';

interface WordContainerProps {
  isAnswered: boolean | undefined;
}

export const WordContainer = styled.div<WordContainerProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;

  padding: 10px;
  border: 1px solid ${(props) => props.theme.palette.border.wordContainer};
  border-radius: 5px;
  transition: 0.3s;
  width: 200px;

  background-color: ${(props) =>
    props.isAnswered ? props.theme.palette.primary.backgroundLight : 'white'};

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px 0
      ${(props) => props.theme.palette.boxShadowColor.word};
  }
`;
