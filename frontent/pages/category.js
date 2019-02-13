import React, { Component } from 'react'
import { withRouter } from 'next/router'

class Category extends Component {
    static getInitialProps({ query }) {
        return query
    }

    render() {
        return <div>Category</div>
    }
}

export default withRouter(Category)
