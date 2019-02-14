import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
    position: absolute;
    top: 0;
    left: 3rem;

    li {
        color: ${({ theme }) => theme.lightgrey};
        line-height: 1.6;
    }
`

const SubcategoryList = ({ category }) => {
    return (
        <Container>
            {category.subCategories.map(i => (
                <li key={i.title}>{i.title}</li>
            ))}
        </Container>
    )
}

export default SubcategoryList
