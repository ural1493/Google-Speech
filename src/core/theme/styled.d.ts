import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        mainDark: string;
        backgroundLight: string;
        backgroundWhite: string;
      };
      text: {
        main: string;
        secondary: string;
        header: string;
      };
      boxShadowColor: {
        heading: string;
        word: string;
        mainImg: string;
      };
      border: {
        wordContainer: string;
      };
    };
  }
}
