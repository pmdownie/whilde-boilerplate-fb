import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const Container = styled.div`
    padding: 0 3rem;
`

const CategoryBody = props => {
    return <Container>{props.listView ? '' : <Slider {...props} />}</Container>
}

export default CategoryBody
