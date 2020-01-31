import { TEST } from '../actions/types';

const initialState = {
    status: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state

    }
}

