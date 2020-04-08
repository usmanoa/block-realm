import { GET_MODULES } from './action';

const initialState= {}
const getModulesReducer = (state= initialState, action) => {
    switch (action.type){
        case GET_MODULES:
            return {
                modules: action.payload
            }
        default: 
            return state
    }
}

export default getModulesReducer

const b = {
    a: 1
}

const c = {...b, dd: 4}