import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
import Meta from './Meta'
import DetectDevice from './DetectDevice'
import Info from '../components/Info'
import Menu from '../components/Menu'

Router.onRouteChangeStart = () => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => {
    NProgress.done()
}

Router.onRouteChangeError = () => {
    NProgress.done()
}

const theme = {
    black: '#000000',
    white: '#ffffff',
    grey: '#4c4c4c',
    lightgrey: '#ababab',
    gutters: '30px',

    // media queries
    desktopxlarge: '1550px',
    desktoplarge: '1350px',
    desktop: '1022px',
    tablet: '1021px',
    mobile: '750px',
    mobilesmall: '321px',

    //  easing
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

    // z-index
    zIndexSubcatList: '5',
    zIndexMenu: '10',
    zIndexInfo: '20',
    zIndexHeader: '30',
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

    html,
    body,
    #__next {
        height: 100%;
    overflow-x: hidden;
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
        font-size: 2rem;
        line-height: 2;
        letter-spacing: -0.01rem;
        font-family: 'GT America';
        font-weight: 200;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media (max-width: ${theme.tablet}) {
            font-size: 1.5rem;
        }

        @media (max-width: ${theme.mobile}) {
            font-size: 1.3rem;
        }
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

    ul,p {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    p {
        margin-bottom: 1rem;
    }
`

const Inner = styled.div`
    height: 100%;
`

const Page = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <DetectDevice>
                <Inner>
                    <Meta />
                    <GlobalStyle />
                    <Info />
                    <Menu />
                    {children}
                </Inner>
            </DetectDevice>
        </ThemeProvider>
    )
}

export default Page
