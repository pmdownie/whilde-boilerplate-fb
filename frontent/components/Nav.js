import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.ul`
    text-align: center;
    transition: color 0.2s ease;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        &:hover {
            color: ${({ theme }) => theme.lightgrey};
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        padding: 2.5rem 0;
    }

    li {
        font-size: 4.8rem;
        line-height: 1.65;
        transition: color 0.2s ease;
        cursor: pointer;

        @media (min-width: ${({ theme }) => theme.desktop}) {
            &:hover {
                color: ${({ theme }) => theme.black};
            }
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 3.6rem;
        }
    }
`

const Nav = ({ handleMouseEnter, handleMouseLeave, homepage: { content } }) => {
    return (
        <StyledNav>
            {content.categories.map((item, i) => (
                <li
                    key={item.id}
                    onMouseEnter={
                        handleMouseEnter ? () => handleMouseEnter(i + 1) : null
                    }
                    onMouseLeave={
                        handleMouseLeave ? () => handleMouseLeave() : null
                    }
                >
                    <Link href="/category?category=hello" as="/hello">
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </StyledNav>
    )
}

export default connect(({ homepage }) => ({ homepage }))(Nav)
