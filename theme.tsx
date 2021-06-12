export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
  primary: "#3615d6",
  text: "#000",
  background: "#31d518",
}
export const dark: ThemeType = {
  primary: "#1d50bd",
  text: "#d72f2f",
  background: "#000",
}

const theme = light; // set the light theme as the default.
export default theme;