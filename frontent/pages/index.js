import React from 'react'
import { fetchContent } from '../actions/content'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import StyledFooter from '../components/StyledFooter'
import Logo from '../components/Logo'
import MenuIcon from '../components/MenuIcon'
import Homepage from '../components/Homepage'

const mapStateToProps = ({ homepage }) => ({ homepage })

const Container = styled.div`
    display: grid;
    grid-template-rows: min-content auto min-content;
    min-height: 100vh;
`

class Home extends React.Component {
    static async getInitialProps({ store }) {
        await store.dispatch(fetchContent('HOMEPAGE'))
        return { loaded: true }
    }

    render() {
        return (
            <Container>
                <StyledHeader>
                    <Logo />
                    <span className="info right">Info</span>
                    <div className="mobile right">
                        <MenuIcon />
                    </div>
                </StyledHeader>
                <Homepage />
                <StyledFooter>
                    <span className="center">
                        {this.props.homepage.content.footer}
                    </span>
                </StyledFooter>
            </Container>
        )
    }
}

export default connect(
    mapStateToProps,
    { fetchContent }
)(Home)
