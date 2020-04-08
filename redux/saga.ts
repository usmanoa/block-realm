import { put, takeEvery } from 'redux-saga/effects'
import { GET_MODULES, getModulesAction } from './action';
import { modules } from '../data'

function* getModulesSaga(){
    yield put(getModulesAction(modules));
}

export default function* saga() {
  yield takeEvery(GET_MODULES, getModulesSaga);
}