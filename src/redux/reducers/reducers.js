// import * as types from '../redux/types';
import { SHOW_SELECTED_PROJECT } from '../../redux/types';

const defaultState = {
    selectedProject: 'none'
}
export default function (state = defaultState, action) {
    switch (action.type) {
        case SHOW_SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: action.payload
            };
        default:
            return {
                ...state
            }
    }
}
