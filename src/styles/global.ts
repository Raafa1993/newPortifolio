import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --white: #FFF;
    --text: #EFF5F5;
    --subTitle: #9599A7;

    --textButton: #2F2C53;

    --content: #141B26;
    --background: #0B0F1F;
    --primary: #A29CED;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-500: #04D361;

    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;

    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-ms: 90%;

    --linearTitle: linear-gradient(90deg, #ED7B84 0%, #9055FF 100%);
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;

    background: var(--background);
  }

  body, input, textarea, button {
    font: 500 1rem Poppins, sans-serif;
    color: var(--gray-500);
  }

  img, picture, video, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: Poppins, sans-serif;
    color: var(--gray-800);
    font-weight: 600;
  }

  #root, #__next {
    isolation: isolate;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: var(--container-width-lg);
    margin: 0 auto;
  }

  @media (max-width: 1080px) {
    html {
        font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%; // 14px
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: var(--container-width-md);
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      width: var(--container-width-ms);
    }
  }
`;
