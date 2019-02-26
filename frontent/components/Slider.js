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

        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .mobile {
        display: none;
        width: 100%;
        height: 60%;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: block;
            background-image: url(https:${({ imageMobile }) => imageMobile});
            background-position: center;
            background-size: 140%;
            background-repeat: no-repeat;
        }
    }
`

const Arrow = styled.div`
    position: absolute;
    height: 100%;
    width: 50vw;
    cursor: url(${({ arrow }) => arrow}), auto;
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

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`

const Slider = ({ settings, sliderRef, category, next, prev }) => {
    const sliderSettings = settings()
    return (
        <Container>
            <Arrow
                left
                onClick={prev}
                arrow={'/static/images/arrow-prev.png'}
            />
            <Arrow
                right
                onClick={next}
                arrow={'/static/images/arrow-next.png'}
            />
            <SliderContainer {...sliderSettings} ref={sliderRef}>
                {category.artworks.map((image, i) => (
                    <Slide key={i} imageMobile={image.smallImage.url}>
                        <img
                            src={`https:${image.largeImage.url}`}
                            alt={image.title}
                        />
                        <div className="mobile" />
                    </Slide>
                ))}
            </SliderContainer>
        </Container>
    )
}

export default Slider
