import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import styled, { css } from 'styled-components'
import toTitleCase from '../lib/to-title-case'
import FullPageBlock from './FullPageBlock'

const mapStateToProps = ({ info }) => ({ info })

const Container = styled.div`
    position: relative;
    -webkit-overflow-scrolling: touch;
    padding: 0 3rem;
    padding-top: 10vh;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.lightgrey};

    @media (min-width: ${({ theme }) => theme.desktop}) {
        height: 100%;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        padding: 0 3rem 5rem;
        padding-top: 5rem;
        position: absolute;
    }

    .header {
        margin-bottom: 2rem;
    }

    .body {
        position: relative;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        column-gap: 1rem;
        top: 1.5rem;

        @media (max-width: ${({ theme }) => theme.tablet}) {
            grid-template-columns: 1fr;
        }
    }

    .info {
        position: relative;
        grid-column: 1 / span 4;

        @media (min-width: ${({ theme }) => theme.desktopxlarge}) {
            grid-column: 1 / span 3;
        }

        @media (max-width: ${({ theme }) => theme.tablet}) {
            grid-column: 1 / span 1;
        }
    }

    .image {
        margin-top: 2rem;

        &.desktop {
            width: 100%;
            grid-column: 6 / span 2;

            @media (min-width: ${({ theme }) => theme.desktopxlarge}) {
                width: 90%;
                grid-column: 5 / span 2;
            }

            @media (max-width: ${({ theme }) => theme.tablet}) {
                display: none;
            }
        }

        &.mobile {
            display: none;
            margin: 0 auto;
            width: 100%;
            margin-top: 3rem;

            @media (max-width: ${({ theme }) => theme.tablet}) {
                display: block;
            }
        }
    }
`

const Link = styled.li`
    position: relative;
    color: ${({ theme }) => theme.white};
    line-height: 1.6;
    cursor: pointer;
    transition: all 0.25s ease;

    ${({ active }) =>
        active &&
        css`
            color: ${({ theme }) => theme.black};
        `}

    span {
        display: inline-block;
        transition: all 0.3s ease;

        ${({ active }) =>
            active &&
            css`
                transform: translateX(2.8rem);
                transition: all 0.25s ease;
            `}
    }

    &:hover {
        @media (min-width: ${({ theme }) => theme.desktop}) {
            span {
                transform: translateX(2.8rem);
                transition: all 0.25s ease;
            }

            &:before {
                opacity: 1;
            }
        }
    }

    &:before {
        content: '';
        position: absolute;
        width: 2rem;
        left: 0;
        top: 0;
        height: 100%;
        background-image: url(${({ arrowWhite }) => arrowWhite});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% auto;
        opacity: 0;
        transition: opacity 0.3s ease;

        ${({ active }) =>
            active &&
            css`
                opacity: 1;
                background-image: url(${({ arrow }) => arrow});
            `}
    }
`

const Copy = styled.div`
    position: absolute;
    width: 100%;
    line-height: 1.55;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.3s ease;

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
            z-index: 5;
        `}

    @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.9rem;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        &:last-of-type {
         position: relative;
        }
    }

    a {
        color: ${({ theme }) => theme.white};
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.black};
        }
    }
`

class Info extends Component {
    state = {
        active: '',
        links: [],
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        let links = []
        const { content } = this.props.info

        Object.keys(content).forEach(i => {
            if (i === 'english' || i === 'french') {
                links.push(i)
            }
        })

        this.setState({ active: links[0], links })
    }

    switchLanguage = lang => this.setState({ active: lang })

    renderCopy = () => {
        let copy = []
        const { content } = this.props.info

        Object.keys(content).forEach(i => {
            if (i === 'english' || i === 'french') {
                copy.push(
                    <Copy
                        key={i}
                        className={`copy ${i}`}
                        active={this.state.active === i}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: marked(content[i]),
                            }}
                        />

                        <img
                            src={`https:${this.props.info.content.image.url}`}
                            alt="Nadine Dewart"
                            className="image mobile"
                        />
                    </Copy>
                )
            }
        })

        return copy
    }

    render() {
        return (
            <FullPageBlock
                slideIn
                open={this.props.info.open}
                zIndex="zIndexInfo"
            >
                <Container>
                    <div className="body">
                        <div className="info">
                            <ul className="header">
                                {this.state.links.map(i => (
                                    <Link
                                        key={i}
                                        className="link"
                                        onClick={() => this.switchLanguage(i)}
                                        active={this.state.active === i}
                                        arrow="/static/images/black-arrow.png"
                                        arrowWhite="/static/images/white-arrow.png"
                                    >
                                        <span>{toTitleCase(i)}</span>
                                    </Link>
                                ))}
                            </ul>
                            {this.renderCopy()}
                        </div>
                        <img
                            src={`https:${this.props.info.content.image.url}`}
                            alt="Nadine Dewart"
                            className="image desktop"
                        />
                    </div>
                </Container>
            </FullPageBlock>
        )
    }
}

export default connect(
    mapStateToProps,
    { toggleInfo, fetchContent }
)(Info)
