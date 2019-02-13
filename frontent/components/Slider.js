import React from 'react'
import SliderContainer from 'react-slick'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: block;
    position: relative;
    width: calc(100vw - 6rem);
    height: 100%;

    div {
        height: 100%;
    }
`

const Slide = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        width: 60%;
    }
`

const Arrow = styled.div`
    position: absolute;
    height: 100%;
    width: 50vw;
    z-index: 1;

    ${({ left }) =>
        left &&
        css`
            left: -3rem;
        `}

    ${({ right }) =>
        right &&
        css`
            right: -3rem;
        `}
`

const Slider = ({ settings, sliderRef, category, next, prev }) => {
    const sliderSettings = settings()
    return (
        <Container>
            <Arrow left onClick={prev} />
            <Arrow right onClick={next} />
            <SliderContainer {...sliderSettings} ref={sliderRef}>
                {category.artworks.map((image, i) => (
                    <Slide key={i}>
                        <img
                            src={`https:${image.largeImage.url}`}
                            alt={image.title}
                        />
                    </Slide>
                ))}
            </SliderContainer>
        </Container>
    )
}

export default Slider
