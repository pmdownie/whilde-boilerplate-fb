import styled, { css } from 'styled-components'

const FullPageBlock = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: ${({ theme, zIndex }) => theme[zIndex]};
    transform: translateX(110vw);
    transition: transform 0.85s ${({ theme }) => theme.easing};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 100%;
        transition: transform 0.3s ${({ theme }) => theme.easing};
    }

    ${({ open }) =>
        open &&
        css`
            transform: translateX(0);
            transition: transform 1s ${({ theme }) => theme.easing};

            @media (max-width: ${({ theme }) => theme.mobile}) {
                transition: transform 0.25s ${({ theme }) => theme.easing};
            }
        `}
`

export default FullPageBlock
