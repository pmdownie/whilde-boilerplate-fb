import React from 'react'
import { fetchContent } from '../actions/content'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = ({ homepage }) => ({
    homepage,
})

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

class Home extends React.Component {
    static async getInitialProps({ store }) {
        // await store.dispatch(fetchContent('HOMEPAGE'))
        return { loaded: true }
    }

    render() {
        return <Container {...this.state}>Whilde boilerplate</Container>
    }
}

export default connect(
    mapStateToProps,
    { fetchContent }
)(Home)
