import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        mainDark: string;
      };
      text: {
        main: string;
        secondary: string;
        header: string;
      };
      boxShadowColor: {
        heading: string;
        word: string;
      };
      border: {
        wordContainer: string;
      };
    };
  }
}
