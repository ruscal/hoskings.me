import {INITIALISE_APP} from '../../constants/app'

const INITIAL_STATE = { };


export default  (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case INITIALISE_APP:
            if(!action.entities || !action.entities.projects)
                return state;

            return {...action.entities.projects}

        default:
            return state;
    }
}
