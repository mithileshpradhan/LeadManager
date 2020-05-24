import { GET_LEADS,DELETE_LEAD,CREATE_LEAD} from '../actions/types.js';

const initialState = {
    leads:[]
}
function leads(state=initialState,action) {
    switch(action.type){
        case GET_LEADS:
            return {
                ...state,
                leads:action.payload
            }
    }
}

export default leads
