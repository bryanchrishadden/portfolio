import * as types from '../redux/types';

export function showSelectedProject(data) {
    return {
        payload: data,
        type: types.SHOW_SELECTED_PROJECT
    }
}
