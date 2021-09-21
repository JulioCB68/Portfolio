import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* -------------------- RESET -------------------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* -------------------- PRE-SETTINGS -------------------- */
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'DM Sans', sans-serif;
  }
  img {
    width: 100%;
  }
/* -------------------- COLORS -------------------- */
  :root {
    --Black: #171717;
    --White: #F9F9F9;
    --Grey: #212121;
    --GreyLight: #828282;
    --GreyDark: #333333;
    --Green: #00DF5E;
  }
`;