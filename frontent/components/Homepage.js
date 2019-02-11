import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = ({ homepage }) => ({ homepage })

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 0 3rem;

    .left {
        text-align: center;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.lightgrey};
        }
    }

    .right {
        align-self: stretch;
        justify-self: stretch;
        background: url(https:${({ background }) => background}) center/cover
            no-repeat;
    }

    .link {
        font-size: 4.8rem;
        line-height: 1.65;
        transition: color 0.2s ease;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.black};
        }
    }
`

class Homepage extends Component {
    state = {
        background: '',
    }

    componentDidMount() {
        this.handleMouseLeave()
    }

    handleMouseEnter = i => {
        const { categories } = this.props.homepage.content
        const background = categories[i].image.url
        this.setState({ background })
    }

    handleMouseLeave = i => {
        const { content } = this.props.homepage
        this.setState({ background: content.image.url })
    }

    renderCategories = () => {
        let categories = []
        const { content } = this.props.homepage

        for (let i = 0; i < content.categories.length; i++) {
            categories.push(
                <li
                    key={i}
                    className="link"
                    onMouseEnter={() => this.handleMouseEnter(i)}
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    {content.categories[i].title}
                </li>
            )
        }

        return categories
    }

    render() {
        return (
            <Container background={this.state.background}>
                <ul className="left">{this.renderCategories()}</ul>
                <div className="right" />
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Homepage)
