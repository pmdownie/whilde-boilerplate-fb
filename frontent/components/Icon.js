import React from 'react'
import styled, { css } from 'styled-components'

const StyledSvg = styled.svg`
    path {
        transition: fill 0.3s ease;
        ${({ white }) =>
            white &&
            css`
                fill: ${({ theme }) => theme.white};
            `}
    }
`

const Icon = ({ white }) => (
    <StyledSvg
        white={white}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 271.95 121.06"
    >
        <path d="M212.33 111.82h-22.35V9.24h22.35c28.27 0 48.38 14.69 48.38 50.57 0 36.42-21.01 52.01-48.38 52.01M212.51 0h-35.26l-41.32 79.38h-.37L93.88 0H80.83v103.12h-.54L11.24 0H0v121.06h10.51V17.4h.37l69.95 103.67h10.51V15.95h.18l39.69 75.38h8.16l39.69-75.38h.23v16.57l-.05 5.71v82.83H212.51c32.98 0 59.44-18.48 59.44-61.26 0-42.22-25.37-59.8-59.44-59.8" />
    </StyledSvg>
)

export default Icon
