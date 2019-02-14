import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import SubcategoryList from './SubcategoryList'

const Container = styled.div`
    position: relative;
    padding: 0 3rem;
`

const CategoryBody = props => {
    return (
        <Container>
            {props.listView ? (
                ''
            ) : (
                <>
                    <SubcategoryList {...props} />
                    <Slider {...props} />
                </>
            )}
        </Container>
    )
}

export default CategoryBody
