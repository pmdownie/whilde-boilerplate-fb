import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import DetectDevice from './DetectDevice'

const theme = {
    black: '#000000',
    white: '#ffffff',
    grey: '#4c4c4c',
    lightgrey: '#BFBFBF',
    gutters: '30px',

    // media queries
    desktoplarge: '1350px',
    desktop: '1022px',
    tablet: '1021px',
    mobile: '750px',
    mobilesmall: '321px',

    //  easing
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

    // z-index
    zIndexInfo: '10',
    zIndexHeader: '20',
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
        color: ${theme.black};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        letter-spacing: -0.01rem;
        font-family: 'GT America';
        font-weight: 200;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }
`

const Inner = styled.div`
    min-height: 100vh;
`

const Page = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <DetectDevice>
                <Inner>
                    <Meta />
                    <GlobalStyle />
                    {children}
                </Inner>
            </DetectDevice>
        </ThemeProvider>
    )
}

export default Page
