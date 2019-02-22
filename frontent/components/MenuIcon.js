import React from 'react'
import styled from 'styled-components'

const Icon = styled.span`
    position: relative;
    display: block;
    width: 15px;
    height: 1px;
    background: ${({ theme }) => theme.black};

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.black};
    }

    &:after {
        bottom: -7px;
    }

    &:before {
        top: -7px;
    }
`

const Background = styled.div`
    position: absolute;
    height: 14px;
    width: 15px;
    top: -7px;
    background: rgba(0, 0, 0, 0.05);
`

const MenuIcon = () => {
    return (
        <>
            <Icon />
            {/* <Background /> */}
        </>
    )
}

export default MenuIcon
