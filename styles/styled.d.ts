import "styled-components";

declare module "styled-components" {
  export interface breakpointType {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
  export interface BorderRadiusType {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
  }
  export interface ColorType {
    primary: string;
    secondary: string;
    tertiary: string;
    bgColor: string;

    blendingGray: string;
    neroGray: string;
    whiteSmoke: string;
    spaceGray: string;
    white: string;
    black: string;
    orange: string;
    green: string;
    blue: string;
    red: string;
    hoki: string;
    rockBlue: string;
    gray: string;
    abbey: string;
    merlin: string;
    cottenSeed: string;
    doveGray: string;
    geyser: string;
    godGray: string;
    mercury: string;
    brightGray: string;
    shuttleGray: string;
    veryLightGrey: string;

    danger: string;
    balticSea: string;
    shark: string;
    jaguar: string;
    mediumGray: string;
    purple: string;
    darkGrey: string;
    brightOrange: string;
    darkBrown: string;
    brightBlue: string;
    feintBlue: string;
    lightBlack: string;
    offWhite: string;
    skyBlue: string;
    deepBlue: string;
    lightBaltic: string;
    darktitle: string;
    graytitle: string;
    lightGray: string;
    // -- Special --
    dropdown: string;
    transparent: string;
  }

  export interface FontType {
    primary: string;
    secondary: string;
  }

  export interface FontSizeType {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    title: string;
    titleMobile: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "9xl": string;
  }

  export interface FontWeightType {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
  }
  export interface LetterSpacingType {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  }
  export interface LetterHeightType {
    normal: string;
    none: string;
    shorter: string;
    short: string;
    base: string;
    tall: string;
    taller: string;
    tallest: string;
  }
  export interface MediaQueryType {
    small: (args: TemplateStringsArray) => string;
    medium: (args: TemplateStringsArray) => string;
    large: (args: TemplateStringsArray) => string;
    up: (
      breakpoint: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    down: (
      breakpoint: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    between: (
      breakpointMin: string,
      breakpointMax: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
  }
  export interface SpaceType {
    px: string;
    0: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    12: string;
    14: string;
    15: string;
    16: string;
    18: string;
    19: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
  }
  export interface SizeType extends SpaceType {
    full: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  }
  export interface ZindexType {
    hide: number;
    auto: string;
    base: number;
    docked: number;
    dropdown: number;
    sticky: number;
    banner: number;
    overlay: number;
    modal: number;
    popover: number;
    skipLink: number;
    toast: number;
    tooltip: number;
  }
  export interface DefaultTheme {
    colors: ColorType;
    fonts: FontType;
    fontSizes: FontSizeType;
    fontWeights: FontWeightType;
    zIndices: ZindexType;
    breakpoint: breakpointType;
  }
}
