import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.ul`
    position: absolute;
    top: 0;
    left: 3rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`
const ListItem = styled.li`
    color: ${({ theme }) => theme.lightgrey};
    line-height: 1.6;

    span {
        position: relative;
    }

    span:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: ${({ theme }) => theme.lightgrey};
        opacity: 0;
        transition: opacity 0.25s ease;

        ${({ active }) =>
            active &&
            css`
                opacity: 1;
                transition: opacity 0.3s ease;
            `}
    }
`

const SubcategoryList = ({ category, subCategoryActive }) => {
    return (
        <Container>
            {category.subCategories.map((item, i) => (
                <ListItem
                    key={item.title}
                    active={subCategoryActive === item.title}
                >
                    <span>{item.title}</span>
                </ListItem>
            ))}
        </Container>
    )
}

export default SubcategoryList
