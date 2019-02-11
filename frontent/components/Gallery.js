import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https:${({ image }) => image}) center/cover no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
        `}
`

class Gallery extends Component {
    render() {
        return (
            <Container>
                {this.props.gallery.map((image, i) => (
                    <Slide
                        key={i}
                        image={image}
                        active={i === this.props.active}
                    />
                ))}
            </Container>
        )
    }
}

export default Gallery
