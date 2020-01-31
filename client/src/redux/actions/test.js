import { TEST } from './types';

export const redux_test = () => (dispatch) => {
    dispatch({
        type: TEST,
        payload: true
    });
}