import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        background: #E5E5E5;
        height: 100%;
      }
      *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
      }
      :root{
          --grayscale-0: #FFFFFF;
          --grayscale-200: #E9EBEE;
          --grayscale-900: #1C1C1C;
          --pink-100: #FFCAE0;
          --red-500: #F3151B;
          --red-600: #E20F15;
          --green-100: #A3F9B9;
          --green-400: #40B25C;
          --green-600: #1E9631;
      }
`;
