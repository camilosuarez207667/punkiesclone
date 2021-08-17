/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: 'rubik-light';
    src: url('/resources/fonts/rubik-light.eot');
    src: url('/resources/fonts/rubik-light.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/rubik-light.woff2') format('woff2'),
      url('/resources/fonts/rubik-light.woff') format('woff'),
      url('/resources/fonts/rubik-light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'rubik-regular';
    src: url('/resources/fonts/rubik-regular.eot');
    src: url('/resources/fonts/rubik-regular.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/rubik-regular.woff2') format('woff2'),
      url('/resources/fonts/rubik-regular.woff') format('woff'),
      url('/resources/fonts/rubik-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-thin';
    src: url('/resources/fonts/montserrat-thin.eot');
    src: url('/resources/fonts/montserrat-thin.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-thin.woff') format('woff'),
      url('/resources/fonts/montserrat-thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-extralight';
    src: url('/resources/fonts/montserrat-extralight.eot');
    src: url('/resources/fonts/montserrat-extralight.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-extralight.woff') format('woff'),
      url('/resources/fonts/montserrat-extralight.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-light';
    src: url('/resources/fonts/montserrat-light.eot');
    src: url('/resources/fonts/montserrat-light.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-light.woff') format('woff'),
      url('/resources/fonts/montserrat-light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-regular';
    src: url('/resources/fonts/montserrat-regular.eot');
    src: url('/resources/fonts/montserrat-regular.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-regular.woff') format('woff'),
      url('/resources/fonts/montserrat-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-medium';
    src: url('/resources/fonts/montserrat-medium.eot');
    src: url('/resources/fonts/montserrat-medium.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-medium.woff') format('woff'),
      url('/resources/fonts/montserrat-medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-semibold';
    src: url('/resources/fonts/montserrat-semibold.eot');
    src: url('/resources/fonts/montserrat-semibold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-semibold.woff') format('woff'),
      url('/resources/fonts/montserrat-semibold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-bold';
    src: url('/resources/fonts/montserrat-bold.eot');
    src: url('/resources/fonts/montserrat-bold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-bold.woff') format('woff'),
      url('/resources/fonts/montserrat-bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-extrabold';
    src: url('/resources/fonts/montserrat-extrabold.eot');
    src: url('/resources/fonts/montserrat-extrabold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-extrabold.woff') format('woff'),
      url('/resources/fonts/montserrat-extrabold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserrat-black';
    src: url('/resources/fonts/montserrat-black.eot');
    src: url('/resources/fonts/montserrat-black.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/montserrat-black.woff') format('woff'),
      url('/resources/fonts/montserrat-black.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-thin';
    src: url('/resources/fonts/nexa-thin.eot');
    src: url('/resources/fonts/nexa-thin.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-thin.woff2') format('woff2'),
      url('/resources/fonts/nexa-thin.woff') format('woff'),
      url('/resources/fonts/nexa-thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-light';
    src: url('/resources/fonts/nexa-light.eot');
    src: url('/resources/fonts/nexa-light.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-light.woff2') format('woff2'),
      url('/resources/fonts/nexa-light.woff') format('woff'),
      url('/resources/fonts/nexa-light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-book';
    src: url('/resources/fonts/nexa-book.eot');
    src: url('/resources/fonts/nexa-book.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-book.woff2') format('woff2'),
      url('/resources/fonts/nexa-book.woff') format('woff'),
      url('/resources/fonts/nexa-book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-regular';
    src: url('/resources/fonts/nexa-regular.eot');
    src: url('/resources/fonts/nexa-regular.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-regular.woff2') format('woff2'),
      url('/resources/fonts/nexa-regular.woff') format('woff'),
      url('/resources/fonts/nexa-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-bold';
    src: url('/resources/fonts/nexa-bold.eot');
    src: url('/resources/fonts/nexa-bold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-bold.woff2') format('woff2'),
      url('/resources/fonts/nexa-bold.woff') format('woff'),
      url('/resources/fonts/nexa-bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-extrabold';
    src: url('/resources/fonts/nexa-extrabold.eot');
    src: url('/resources/fonts/nexa-extrabold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-extrabold.woff2') format('woff2'),
      url('/resources/fonts/nexa-extrabold.woff') format('woff'),
      url('/resources/fonts/nexa-extrabold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-heavy';
    src: url('/resources/fonts/nexa-heavy.eot');
    src: url('/resources/fonts/nexa-heavy.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-heavy.woff2') format('woff2'),
      url('/resources/fonts/nexa-heavy.woff') format('woff'),
      url('/resources/fonts/nexa-heavy.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nexa-black';
    src: url('/resources/fonts/nexa-black.eot');
    src: url('/resources/fonts/nexa-black.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/nexa-black.woff2') format('woff2'),
      url('/resources/fonts/nexa-black.woff') format('woff'),
      url('/resources/fonts/nexa-black.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'robotslab-thin';
    src: url('/resources/fonts/robotslab-thin.eot');
    src: url('/resources/fonts/robotslab-thin.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/robotslab-thin.woff2') format('woff2'),
      url('/resources/fonts/robotslab-thin.woff') format('woff'),
      url('/resources/fonts/robotslab-thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'robotslab-light';
    src: url('/resources/fonts/robotslab-light.eot');
    src: url('/resources/fonts/robotslab-light.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/robotslab-light.woff2') format('woff2'),
      url('/resources/fonts/robotslab-light.woff') format('woff'),
      url('/resources/fonts/robotslab-light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'robotslab-regular';
    src: url('/resources/fonts/robotslab-regular.eot');
    src: url('/resources/fonts/robotslab-regular.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/robotslab-regular.woff2') format('woff2'),
      url('/resources/fonts/robotslab-regular.woff') format('woff'),
      url('/resources/fonts/robotslab-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'robotslab-bold';
    src: url('/resources/fonts/robotslab-bold.otf');
    src: url('/resources/fonts/robotslab-bold.eot?#iefix') format('embedded-opentype'),
      url('/resources/fonts/robotslab-bold.woff2') format('woff2'),
      url('/resources/fonts/robotslab-bold.woff') format('woff'),
      url('/resources/fonts/robotslab-bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'zonapro-black';
    src: url('/resources/fonts/zonapro-black.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-bold';
    src: url('/resources/fonts/zonapro-bold.eot') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-extrabold';
    src: url('/resources/fonts/zonapro-extrabold.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-hairline';
    src: url('/resources/fonts/zonapro-hairline.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-light';
    src: url('/resources/fonts/zonapro-light.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-regular';
    src: url('/resources/fonts/zonapro-regular.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-semibold';
    src: url('/resources/fonts/zonapro-semibold.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-thin';
    src: url('/resources/fonts/zonapro-thin.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zonapro-ultra';
    src: url('/resources/fonts/zonapro-ultra.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/resources/fonts/materialicons-regular.eot); /* For IE6-8 */
    src: local('Material Icons'),
        local('MaterialIcons-Regular'),
        url(/resources/fonts/materialicons-regular.woff2) format('woff2'),
        url(/resources/fonts/materialicons-regular.woff) format('woff'),
        url(/resources/fonts/materialicons-regular.ttf) format('truetype');
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    display: block;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
  .grecaptcha-badge {
    opacity: 0;
  }
  .zsiq_floatmain .zsiq_float .zsiq_flt_rel .zsiq_cnt {
    display: none;
  }
  #resumator-wrapper {
    padding: 5em 2em;
  }
`;

export default GlobalStyle;
