import React from 'react'
import Link from 'next/link'
import StyledHeader from '../components/StyledHeader'
import Logo from '../components/Logo'

const Home = () => (
    <>
        <StyledHeader>
            <Logo />
            <Link href="/about">
                <a className="right">Info</a>
            </Link>
        </StyledHeader>
    </>
)

export default Home
