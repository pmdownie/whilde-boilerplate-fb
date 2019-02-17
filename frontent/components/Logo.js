import React from 'react'
import Icon from './Icon'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 40px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 33px;
        }
    }

    .line {
        width: 1px;
        height: 3.25rem;
        margin: 0 1.2rem;
        background: ${({ theme }) => theme.black};
        transition: background-color 0.3s ease;

        ${({ white }) =>
            white &&
            css`
                background: ${({ theme }) => theme.white};
            `}

        @media (max-width: ${({ theme }) => theme.mobile}) {
            height: 2.8rem;margin: 0 1.1rem;
        }
    }
`

const Logo = ({ white }) => {
    return (
        <Container white={white}>
            <Icon white={white} />
            <span className="line" />
            <span className="name">Nadine Dewart</span>
        </Container>
    )
}

export default Logo
