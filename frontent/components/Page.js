import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
    black: '#000000',
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GT America';
        font-weight: 700;
        font-style: normal;
        src: url('/static/fonts/GT-America-Standard-Bold.woff2') format('woff2'),
            url('/static/fonts/GT-America-Standard-Bold.woff') format('woff');
    }

    @font-face {
        font-family: 'GT America';
        font-weight: 200;
        font-style: normal;
        src: url('/static/fonts/GT-America-Standard-Light.woff2') format('woff2'),
            url('/static/fonts/GT-America-Standard-Light.woff') format('woff');
    }

    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'GT America';
        font-weight: 200;
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }
`

const Inner = styled.div``

const Page = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Inner>
                <GlobalStyle />
                {children}
            </Inner>
        </ThemeProvider>
    )
}

export default Page
