import * as constants from '../constants/app'
import { normalize } from 'normalizr';
import * as schema from '../schema'

export const initialiseApp = (data)=> (dispatch, getState) => {
    let normalized = normalize(data, {
        portfolio: {
            projects: [schema.projectSchema]
        },
        labs: {
            projects: [schema.projectSchema]
        }
    });
    return dispatch(new Promise((resolve, reject) =>{
        resolve({
            type: constants.INITIALISE_APP,
            ...normalized
        });
    }));
}


export const sectionHasChanged = (newSection)=> (dispatch, getState) => {
    return dispatch(new Promise((resolve, reject) =>{
        resolve({
            type: constants.SECTION_CHANGED,
            newSection
        });
    }));
}

