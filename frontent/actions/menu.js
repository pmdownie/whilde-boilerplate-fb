import { api } from '../constants'

const toggle = open => {
    return {
        type: api.MENU_DRAWER_TOGGLE,
        open,
    }
}

export const closeMenu = () => dispatch => {
    dispatch(toggle(false))
}

export const toggleMenu = () => (dispatch, getState) => {
    const { open } = getState().menu
    dispatch(toggle(!open))
}
