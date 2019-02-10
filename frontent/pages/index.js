import React from 'react'
import Link from 'next/link'
import { fetchContent } from '../actions/content'
import { connect } from 'react-redux'
import StyledHeader from '../components/StyledHeader'
import Logo from '../components/Logo'

const mapStateToProps = ({ homepage }) => ({ homepage })

class Home extends React.Component {
    render() {
        return (
            <>
                <StyledHeader>
                    <Logo />
                    <Link href="/about">
                        <a className="right">Info</a>
                    </Link>
                </StyledHeader>
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { fetchContent }
)(Home)
