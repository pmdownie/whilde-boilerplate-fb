import React from 'react'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import StyledFooter from '../components/StyledFooter'
import Logo from '../components/Logo'
import Info from '../components/Info'
import MenuIcon from '../components/MenuIcon'
import Homepage from '../components/Homepage'

const mapStateToProps = ({ homepage, info, device }) => ({
    homepage,
    info,
    device,
})

const Container = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: min-content auto min-content;
    width: 100vw;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.mobile}) {
        min-height: 100vh;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 100%;
    }
`

class Home extends React.Component {
    static async getInitialProps({ store }) {
        await store.dispatch(fetchContent('HOMEPAGE'))
        await store.dispatch(fetchContent('INFO'))
        return { loaded: true }
    }

    render() {
        return (
            <Container {...this.state}>
                <StyledHeader infoOpen={this.props.info.open}>
                    <Logo white={this.props.info.open} />
                    <span
                        className="info right"
                        onClick={this.props.toggleInfo}
                    >
                        {this.props.info.open ? 'Close' : 'Info'}
                    </span>
                    <div
                        className="mobile right"
                        onClick={this.props.toggleInfo}
                    >
                        {this.props.info.open ? 'Close' : <MenuIcon />}
                    </div>
                </StyledHeader>
                <Info />
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
    { fetchContent, toggleInfo }
)(Home)
