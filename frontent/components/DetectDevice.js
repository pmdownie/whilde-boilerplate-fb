import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDevice } from '../actions/device'

const mapStateToProps = ({ device }) => ({ device })

class DetectDevice extends Component {
    componentDidMount() {
        this.setDevice()
        window.addEventListener('resize', this.setDevice)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setDevice)
    }

    setDevice = () => {
        this.props.setDevice(window.innerWidth)
    }

    render() {
        return <>{this.props.children}</>
    }
}

export default connect(
    mapStateToProps,
    { setDevice }
)(DetectDevice)
