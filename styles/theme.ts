/* stylelint-disable */
import { ColorType, DefaultTheme  } from 'styled-components';

const breakpoint = {
  xs: '23.438rem',
  sm: '48rem',
  md: '1200px'
};
const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
};

const colors: ColorType = {
  white: '#ffffff',
  black: '#111111',
  orange: '#ff9100',
  green: '#9aca3c',
  red: '#ff0000',
  dropdown: '#515151',
  transparent: 'transparent',


  /* blue */
  blue: '#0071bc',
  hoki: '#637ca5',
  rockBlue: '#a0b1ce',
  brightBlue: '#2796f6',
  feintBlue: '#778aa7',
  skyBlue: '#f4f5f5',
  deepBlue: '#2680eb',

  /* gray */
  gray: '#919191',
  abbey: '#4a4d51',
  merlin: '#3e3c39', // text color
  cottenSeed: '#b9b8b7',
  doveGray: '#737373',
  geyser: '#d5dce6',
  godGray: '#0f0f0f', // text color
  mercury: '#e6e6e6',
  brightGray: '#2796f6', // text color
  shuttleGray: '#5e6d84', // text color
  veryLightGrey: '#C9C9C9', // text color
  mediumGray: '#586678', //text color
  darkGrey: '#33363b',
  offWhite: '#f8f8f8',
  spaceGray: '#bdbdbd', //border color
  neroGray: '#212121', //text color
  lightBlack: '#313131', //text color
  whiteSmoke: '#f5f5f5', //members card background
  darktitle: '#515151',
  graytitle: '#212121',
  blendingGray: '#f4f4f4',

  balticSea: '#383d41', // page navigation dropdown background
  shark: '#33373d', // page navigation background
  jaguar: '#232325', // page navigation sidebar background
  lightBaltic: '#353d49',
  lightGray: '#e8e8e8',

  purple: '#383c41', //footer background color
  brightOrange: '#ff9100',
  darkBrown: '#272729',
  danger: '#de1414' // form's error message
} as ColorType;

colors['primary'] = colors.black;
colors['secondary'] = colors.white;
colors['tertiary'] = colors.red;

const fonts = {
  primary: '"Metal Mania", cursive',
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2md':'32px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '4.5xl': '42px',
  '5xl': '48px',
  '6xl': '64px',
  '9xl': '96px'
};

const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

const lettingSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};

const lineHeights = {
  normal: 'normal',
  none: '1',
  shorter: '1.25',
  short: '1.375',
  base: '1.5',
  tall: '1.625',
  taller: '1,75',
  tallest: '2'
};

const shadows = [
  '3px 3px 10px 0 rgba(0,0,0,0.3)',
  '0px 3px 6px rgba(0,0,0,0.29)',
  '0px 15px 10px -5px rgba(0,0,0,0.29)',
  'inset 0px 2px 4px rgba(0,0,0,0.8)',

  // 4. used in page header
  '0px 15px 10px -5px #00000029',

  // 5. used in card
  '0px 3px 15px -2px #00000050'
];

const space = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  18: '4.25rem',
  19: '4.75rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
};

const sizes = {
  ...space,
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem'
};

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};

export const theme: DefaultTheme = {
  borderRadius,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lettingSpacings,
  lineHeights,
  shadows,
  space,
  sizes,
  zIndices,
  breakpoint,
};
