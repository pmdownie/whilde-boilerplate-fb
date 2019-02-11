import { api } from '../constants'

export const setDevice = width => {
    return {
        type: api.SET_DEVICE,
        width,
    }
}
