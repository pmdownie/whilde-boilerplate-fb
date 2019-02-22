import styled, { css } from 'styled-components'

const FullPageBlock = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    transition: transform 0.85s ${({ theme }) => theme.easing};
    z-index: ${({ theme, zIndex }) => theme[zIndex]};

    @media (min-width: ${({ theme }) => theme.desktop}) {
        transform: translateX(110vw);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        transform: translateX(-110vw);
        height: 100%;
        transition: transform 0.3s ${({ theme }) => theme.easing};
    }

    ${({ open }) =>
        open &&
        css`
            @media (min-width: ${({ theme }) => theme.desktop}) {
                transform: translateX(0);
                transition: transform 1s ${({ theme }) => theme.easing};
            }

            @media (max-width: ${({ theme }) => theme.mobile}) {
                transform: translateX(0);
                transition: transform 0.25s ${({ theme }) => theme.easing};
            }
        `}
`

export default FullPageBlock
