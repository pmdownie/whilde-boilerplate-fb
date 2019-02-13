import styled from 'styled-components'

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
`

export default StyledFooter
