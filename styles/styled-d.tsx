// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
  }

  export interface DarkTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
  }
}