import { api } from '../constants'

const toggle = open => {
    return {
        type: api.INFO_DRAWER_TOGGLE,
        open,
    }
}

export const toggleInfo = () => (dispatch, getState) => {
    const { open } = getState().info
    dispatch(toggle(!open))
}
