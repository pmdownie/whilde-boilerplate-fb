import React from 'react'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import { closeMenu } from '../actions/menu'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import StyledFooter from '../components/StyledFooter'
import Logo from '../components/Logo'
import MenuTrigger from '../components/MenuTrigger'
import Homepage from '../components/Homepage'

const mapStateToProps = ({ homepage, info, menu, device }) => ({
    homepage,
    info,
    menu,
    device,
})

const Container = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: min-content auto min-content;
    overflow: hidden;
    max-width: 100vw;

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

    componentDidMount() {
        this.props.closeMenu()
    }

    render() {
        return (
            <Container {...this.state}>
                <StyledHeader infoOpen={this.props.info.open}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={
                            this.props.info.open ? this.props.toggleInfo : null
                        }
                    >
                        {this.props.info.open ? (
                            this.props.device.mobile ? (
                                'Info'
                            ) : (
                                <Logo white={this.props.info.open} />
                            )
                        ) : (
                            <Logo white={this.props.info.open} />
                        )}
                    </div>
                    <span
                        className="info right hoverGrey cursor"
                        onClick={this.props.toggleInfo}
                    >
                        {this.props.info.open ? 'Close' : 'Info'}
                    </span>
                    <MenuTrigger />
                </StyledHeader>
                <Homepage />
                <StyledFooter>
                    <span className="center small">
                        {this.props.homepage.content.footer}
                    </span>
                </StyledFooter>
            </Container>
        )
    }
}

export default connect(
    mapStateToProps,
    { fetchContent, toggleInfo, closeMenu }
)(Home)
