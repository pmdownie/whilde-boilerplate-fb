import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContent } from '../actions/content'
import { withRouter } from 'next/router'

const mapStateToProps = ({ categories }) => ({ categories })

class Category extends Component {
    static async getInitialProps({ store, query }) {
        // const id = query.category
        // await store.dispatch(fetchContent('CATEGORY', id))
        return query
    }

    componentDidMount() {
        this.props.fetchContent('CATEGORY', this.props.category)
    }

    render() {
        return <div>Category</div>
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { fetchContent }
    )(Category)
)
