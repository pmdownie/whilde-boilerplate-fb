import React from 'react'
import { connect } from 'react-redux'
import { fetchContent } from '../actions/content'
import { toggleInfo } from '../actions/info'
import styled from 'styled-components'

const mapStateToProps = ({ info }) => ({ info })

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.lightgrey};
    z-index: ${({ theme }) => theme.zIndexInfo};
`

const Info = () => <Container>Info</Container>

export default connect(
    mapStateToProps,
    { toggleInfo, fetchContent }
)(Info)
