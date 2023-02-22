import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }

    #root {
        display: grid;
        width: 100%;
        min-height: 100%;
        grid-template: 
            "header" 100px
            "main" auto
            "footer" 70px;
    }
`