import axios from 'axios';

import { GET_LEADS,ADD_LEAD,DELETE_LEAD } from './types';

// get leads
export const getLeads = () => (dispatch,getState) => {
    axios
        .get('/api/leads/')
        .then((res) => {
            dispatch({
                type:GET_LEADS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}