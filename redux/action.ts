const GET_MODULES: string = 'GET_MODULES';

interface Action {
  type: typeof GET_MODULES
  payload: any
}


const getModulesAction = (modules: any): Action => ({
    type: GET_MODULES,
    payload: modules
})

export {  GET_MODULES, getModulesAction }