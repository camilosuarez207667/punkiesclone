/* stylelint-disable */
import { ColorType, DefaultTheme } from "styled-components";

const colors: ColorType = {
  white: "#ffffff",
  black: "#141414",
  orange: "#ff9100",
  green: "#9aca3c",
  red: "#AC1713",
  bgColor: "#141414",

  //Mobile Dropdown Color
  dropdown: "#161616",
  transparent: "transparent",

  /* blue */
  blue: "#0071bc",
  hoki: "#637ca5",
  rockBlue: "#a0b1ce",
  brightBlue: "#2796f6",
  feintBlue: "#778aa7",
  skyBlue: "#f4f5f5",
  deepBlue: "#2680eb",

  /* gray */
  gray: "#919191",
  abbey: "#4a4d51",
  merlin: "#3e3c39", // text color
  cottenSeed: "#b9b8b7",
  doveGray: "#737373",
  geyser: "#d5dce6",
  godGray: "#0f0f0f", // text color
  mercury: "#e6e6e6",
  brightGray: "#2796f6", // text color
  shuttleGray: "#5e6d84", // text color
  veryLightGrey: "#C9C9C9", // text color
  mediumGray: "#586678", //text color
  darkGrey: "#33363b",
  offWhite: "#f8f8f8",
  spaceGray: "#bdbdbd", //border color
  neroGray: "#212121", //text color
  lightBlack: "#313131", //text color
  whiteSmoke: "#f5f5f5", //members card background
  darktitle: "#515151",
  graytitle: "#212121",
  blendingGray: "#f4f4f4",

  balticSea: "#383d41", // page navigation dropdown background
  shark: "#33373d", // page navigation background
  jaguar: "#232325", // page navigation sidebar background
  lightBaltic: "#353d49",
  lightGray: "#e8e8e8",

  purple: "#383c41", //footer background color
  brightOrange: "#ff9100",
  darkBrown: "#272729",
  danger: "#de1414", // form's error message
} as ColorType;

colors["primary"] = colors.black;
colors["secondary"] = colors.white;
colors["tertiary"] = colors.red;
colors["bgColor"] = colors.bgColor;

const fonts = {
  primary: '"Metal Mania", cursive',
  secondary: '"Lato", sans-serif',
  tertiary: '"Lato", sans-serif',
};

const breakpoint = {
  xs: "768px",
  sm: "1024px",
  md: "1280px",
  lg: "1600px",
};
const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  title: "36px",
  titleMobile: "30px",
  "2md": "32px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "4.5xl": "42px",
  "5xl": "48px",
  "6xl": "64px",
  "9xl": "96px",
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
  black: 900,
};

const zIndices = {
  hide: -1,
  auto: "auto",
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
  tooltip: 1800,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  zIndices,
  breakpoint,
};
