import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.ul`
    text-align: center;
    transition: color 0.2s ease;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        &:hover {
            a {
                color: ${({ theme }) => theme.lightgrey};
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        padding: 2.5rem 0;
    }

    li {
        font-size: 6rem;
        line-height: 1.55;
        cursor: pointer;

        @media (min-width: ${({ theme }) => theme.desktop}) {
            &:hover {
                a {
                    color: ${({ theme }) => theme.black};
                }
            }
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 3.6rem;
        }
    }

    a {
        transition: color 0.2s ease;
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
                    <Link
                        prefetch
                        href={`/category?category=${item.id}`}
                        as={`/${item.id}`}
                    >
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </StyledNav>
    )
}

export default connect(({ homepage }) => ({ homepage }))(Nav)
