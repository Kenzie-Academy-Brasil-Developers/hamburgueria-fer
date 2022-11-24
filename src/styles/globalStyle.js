import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    font-family:'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

button{
    cursor: pointer;
    border: none;
}

a{
    color:unset;
    text-decoration: none;
}


:root{

    --color-primary: #27AE60;
    --color-primary-filter:#93D7AF;
    --color-secundary:#EB5757;

    --color-white: #FFFFFF;
    --color-black:#000000;

    --color-grey-0:#F5F5F5;
    --color-grey-20:#E0E0E0;
    --color-grey-50:#828282;
    --color-grey-100:#333333;

    --color-negative:#E60000;
    --color-sucess:#168821;
    --color-warning:#FFCD07;
    --color-information:#155BCB;


    --font-18: 1.125rem;
    --font-14: 0.875rem;


}

`