import React from 'react'
import { connect } from 'react-redux'
import { toggleInfo } from '../actions/info'
import { toggleMenu } from '../actions/menu'
import MenuIcon from './MenuIcon'

const MenuTrigger = ({ info, menu, toggleInfo, toggleMenu }) => {
    return (
        <div
            className="mobile right"
            onClick={() => (info.open ? toggleInfo() : toggleMenu())}
        >
            {info.open || menu.open ? 'Close' : <MenuIcon />}
        </div>
    )
}

export default connect(
    ({ info, menu }) => ({ info, menu }),
    { toggleInfo, toggleMenu }
)(MenuTrigger)
