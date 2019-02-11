import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import styled, { css } from 'styled-components'
import toTitleCase from '../lib/to-title-case'

const mapStateToProps = ({ info }) => ({ info })

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    padding: 0 3rem;
    padding-top: 12rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.lightgrey};
    z-index: ${({ theme }) => theme.zIndexInfo};

    .header {
        display: grid;
        grid-template-columns: repeat(2, min-content);
        column-gap: 1rem;
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
            font-weight: 700;
        `}
`

const Copy = styled.div`
    position: absolute;
    width: 38rem;
    line-height: 1.5;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
        `}
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
            if (i !== 'about') {
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
            if (i !== 'about') {
                copy.push(
                    <Copy
                        key={i}
                        className={`copy ${i}`}
                        active={this.state.active === i}
                    >
                        {content[i]}
                    </Copy>
                )
            }
        })

        return copy
    }

    render() {
        return (
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
        )
    }
}

export default connect(
    mapStateToProps,
    { toggleInfo, fetchContent }
)(Info)
