import styled, { css } from 'styled-components'

const StyledFooter = styled.footer`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 6rem;
    padding: 0 3rem;

    .right {
        justify-self: end;
    }

    .small {
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size: 1.8rem;
        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.4rem;
        }
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.lightgrey};
    }

    .bold {
        font-weight: 700;
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

    .grey {
        color: ${({ theme }) => theme.lightgrey};
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

    .hoverDarkGrey {
        transition: color 0.3s ease;
        &:hover {
            color: ${({ theme }) => theme.grey};
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
            display: none;
        `}
`

export default StyledFooter
