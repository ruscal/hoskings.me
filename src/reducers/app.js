import {SECTION_CHANGED} from '../constants/app'
import {INITIALISE_APP} from '../constants/app'

const getTitle = (section) => {
    return section ? `${section.name} | Russ Hoskings` : "Russ Hoskings";
}


const INITIAL_STATE = { title: getTitle(), portfolio: { projects:[]}, labs: {projects:[]} };


export default  (state = INITIAL_STATE , action)=>{
    switch(action.type){

        case INITIALISE_APP:
            return {...state, ...action.result};

        case SECTION_CHANGED:
            return {...state, title: getTitle(action.newSection), section: action.newSection }

        default:
            return state;
    }
}
