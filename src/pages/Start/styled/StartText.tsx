import styled from 'styled-components';

export const StartText = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 300;
  color: ${(props) => props.theme.palette.text.secondary};
  opacity: 0.8;
`;
