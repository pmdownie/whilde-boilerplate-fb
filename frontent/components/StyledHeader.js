import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 6rem;
    padding: 0 3rem;
    z-index: ${({ theme }) => theme.zIndexHeader};
    transition: color 0.3s ease;

    ${({ infoOpen }) =>
        infoOpen &&
        css`
            color: ${({ theme }) => theme.white};
        `}

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 1fr auto;
    }

    .right {
        justify-self: end;
    }

    .info {
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .mobile {
        display: none;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: block;
        }
    }
`

export default StyledHeader
