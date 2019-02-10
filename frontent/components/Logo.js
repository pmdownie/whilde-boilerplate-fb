import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 35px;
    }

    .line {
        width: 0.5px;
        height: 3rem;
        margin: 0 1.2rem;
        background: ${({ theme }) => theme.black};
    }
`

const Logo = () => {
    return (
        <Container>
            <Icon />
            <span className="line" />
            <span className="name">Nadine Dewart</span>
        </Container>
    )
}

export default Logo
