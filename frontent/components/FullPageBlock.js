import styled, { css } from 'styled-components'

const FullPageBlock = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: ${({ theme, zIndex }) => theme[zIndex]};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 100%;
    }

    ${({ slideIn }) =>
        slideIn &&
        css`
            transform: translateX(110vw);
            transition: transform 0.45s ${({ theme }) => theme.easing};
        `}

    ${({ open }) =>
        open &&
        css`
            transform: translateX(0);
            transition: transform 0.5s ${({ theme }) => theme.easing};
        `}
`

export default FullPageBlock
