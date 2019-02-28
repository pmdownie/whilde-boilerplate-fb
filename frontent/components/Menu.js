import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { toggleInfo } from '../actions/info'
import { toggleMenu } from '../actions/menu'
import styled from 'styled-components'
import FullPageBlock from './FullPageBlock'
import Nav from './Nav'

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: auto min-content auto;
    height: 100%;
    background: ${({ theme }) => theme.vlightgrey};
    justify-items: center;
    align-items: center;

    .home,
    .info {
        font-size: 2.9rem;
    }

    .home {
        align-self: end;
    }

    .info {
        align-self: start;
    }
`

const Menu = ({ menu, toggleInfo, toggleMenu, pathname }) => (
    <FullPageBlock zIndex="zIndexMenu" open={menu.open} slideIn>
        <Container>
            <div
                className="home"
                onClick={() => {
                    Router.push('/')
                    pathname === '/' && toggleMenu()
                }}
            >
                Home
            </div>
            <Nav />
            <div className="info" onClick={toggleInfo}>
                Info
            </div>
        </Container>
    </FullPageBlock>
)

export default connect(
    ({ menu }) => ({ menu }),
    { toggleInfo, toggleMenu }
)(Menu)
