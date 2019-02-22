import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Nav from './Nav'
import Gallery from './Gallery'

const mapStateToProps = ({ homepage, device }) => ({ homepage, device })

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 0 3rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 1fr;
    }

    .left {
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .right {
        align-self: stretch;
        justify-self: stretch;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            height: 98%;
            align-self: center;
        }
    }
`

class Homepage extends Component {
    state = {
        active: 0,
        gallery: [],
        galleryMobile: [],
    }

    componentDidMount() {
        this.setGallery()
        if (this.props.device.mobile)
            this.autoplay = setInterval(() => this.setAutoPlay(), 5000)
    }

    componentDidUpdate(prevProps) {
        const { mobile } = this.props.device
        if (mobile && mobile !== prevProps.device.mobile)
            this.autoplay = setInterval(() => this.setAutoPlay(), 5000)
        if (!mobile && mobile !== prevProps.device.mobile)
            clearTimeout(this.autoplay)
    }

    componentWillUnmount() {
        clearTimeout(this.autoplay)
    }

    setAutoPlay = () => {
        const { active } = this.state
        const { categories } = this.props.homepage.content

        if (active === categories.length) return this.setState({ active: 0 })
        return this.setState(({ active }) => ({ active: active + 1 }))
    }

    setGallery = () => {
        const { content } = this.props.homepage

        const gallery = content.categories.reduce((tally, category) => {
            tally.push(category.image.url)
            return tally
        }, [])

        const galleryMobile = content.categories.reduce((tally, category) => {
            tally.push(category.imageMobile.url)
            return tally
        }, [])

        gallery.unshift(content.image.url)
        galleryMobile.unshift(content.imageMobile.url)

        this.setState({ gallery, galleryMobile })
    }

    handleMouseEnter = active => this.setState({ active })

    handleMouseLeave = () => this.setState({ active: 0 })

    render() {
        return (
            <Container background={this.state.background}>
                <div className="left">
                    <Nav
                        handleMouseEnter={this.handleMouseEnter}
                        handleMouseLeave={this.handleMouseLeave}
                    />
                </div>
                <div className="right">
                    <Gallery
                        gallery={
                            this.props.device.mobile
                                ? this.state.galleryMobile
                                : this.state.gallery
                        }
                        active={this.state.active}
                    />
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Homepage)
