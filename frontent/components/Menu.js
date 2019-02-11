import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.ul`
    text-align: center;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.lightgrey};
    }

    li {
        font-size: 4.8rem;
        line-height: 1.65;
        transition: color 0.2s ease;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.black};
        }
    }
`

const Menu = ({ handleMouseEnter, handleMouseLeave, items }) => {
    return (
        <StyledMenu>
            {items.map((item, i) => (
                <li
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    {item.title}
                </li>
            ))}
        </StyledMenu>
    )
}

export default Menu
