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
    height: 100%;
    padding: 0 3rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.lightgrey};

    .header {
        padding-top: 13vh;
        display: grid;
        grid-template-columns: repeat(2, min-content);
        column-gap: 1rem;

        @media (max-width: ${({ theme }) => theme.tablet}) {
            padding-top: 8rem;
        }
    }

    .body {
        position: relative;
        top: 1.5rem;
    }
`

const Link = styled.span`
    color: ${({ theme }) => theme.black};
    cursor: pointer;
    transition: all 0.3s ease;

    ${({ active }) =>
        active &&
        css`
            color: ${({ theme }) => theme.white};
            text-decoration: underline;
        `}

    &:hover {
        color: ${({ theme }) => theme.white};
    }
`

const Copy = styled.div`
    position: absolute;
    width: 55rem;
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
        font-size: 1.8rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
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
            if (i !== 'title') {
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
            if (i !== 'title') {
                copy.push(
                    <Copy
                        key={i}
                        className={`copy ${i}`}
                        active={this.state.active === i}
                        dangerouslySetInnerHTML={{ __html: marked(content[i]) }}
                    />
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
                    <div className="header">
                        {this.state.links.map(i => (
                            <Link
                                key={i}
                                className="link"
                                onClick={() => this.switchLanguage(i)}
                                active={this.state.active === i}
                            >
                                {toTitleCase(i)}
                            </Link>
                        ))}
                    </div>
                    <div className="body">{this.renderCopy()}</div>
                </Container>
            </FullPageBlock>
        )
    }
}

export default connect(
    mapStateToProps,
    { toggleInfo, fetchContent }
)(Info)
