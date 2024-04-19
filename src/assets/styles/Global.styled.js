import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* ------- Reset css ------- */

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: Pretendard;
  color: inherit;
  vertical-align: baseline;
}

/* ----- HTML5 display-role reset for older browsers ------ */

article,aside,details,figcaption,
figure,footer,header,hgroup,menu,nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

/* --------- color constants --------- */

:root {
  --error-color: #DC3A3A;
  --black-color: #000000;
  --white-color: #ffffff;
  --surface-color: #F6F8FF;
  --purple-100: #F8F0FF;
  --purple-200: #ECD9FF;
  --purple-300: #DCB9FF;
  --purple-400: #C894FD;
  --purple-500: #AB57FF;
  --purple-600: #9935FF;
  --purple-700: #861DEE;
  --purple-800: #6E0AD1;
  --purple-900: #5603A7;
  --orange-100: #FFF0D6;
  --orange-200: #FFE2AD;
  --orange-300: #FFC583;
  --orange-400: #FFAE65;
  --orange-500: #FF8832;
  --blue-100: #E2F5FF;
  --blue-200: #B1E4FF;
  --blue-300: #7CD2FF;
  --blue-400: #34B9FF;
  --blue-500: #00A2FE;
  --green-100: #E4FBDC;
  --green-200: #D0F5C3;
  --green-300: #9BE282;
  --green-400: #60CF37;
  --green-500: #2BA600;
  --gray-100: #F6F6F6;
  --gray-200: #EEEEEE;
  --gray-300: #CCCCCC;
  --gray-400: #999999;
  --gray-500: #555555;
  --gray-600: #4A4A4A;
  --gray-700: #3A3A3A;
  --gray-800: #2B2B2B;
  --gray-900: #181818;
}

`;

export default GlobalStyle;
