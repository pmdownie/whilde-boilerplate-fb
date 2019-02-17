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

    a {
        transition: color 0.3s ease;
    }

    ${({ infoOpen }) =>
        infoOpen &&
        css`
            color: ${({ theme }) => theme.white};
            a {
                color: ${({ theme }) => theme.white};
            }
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

    .hideMobile {
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .bold {
        font-weight: 700;
    }
    .cursor {
        cursor: pointer;
    }

    .hoverGrey {
        transition: color 0.3s ease;
        &:hover {
            color: ${({ theme }) => theme.lightgrey};
            ${({ infoOpen }) =>
                infoOpen &&
                css`
                    color: ${({ theme }) => theme.black};
                `}
        }
    }

    ${({ listView }) =>
        listView &&
        css`
            position: fixed;
            width: 100%;
        `}
`

export default StyledHeader
