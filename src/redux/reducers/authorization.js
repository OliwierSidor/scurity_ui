import {AUTH_LOGIN_FAIL, AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS} from "../actions/ActionType";

const updateObject = (oldObject, updateObject) => {
    return {
        ...oldObject, ...updateObject
    }
}

const initialState = {
    token: null, roles: null,

    error: null, loading: false
}
const handleAuthorizationStart = (state) => {
    console.log('aktualizuję stan auth na start')
    return updateObject(state, {loading: true})
}

const handleAuthorizationSuccess = (state, action) => {
    console.log('aktualizuję stan auth success')
    return updateObject(state, {token: action.token, roles: action.roles, loading: false})
}
const handleAuthorizationFail = (state, action) => {
    console.log('aktualizuję stan auth fail')
    return updateObject(state, {token: null, roles: null, loading: false})
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return handleAuthorizationStart(state)
        case AUTH_LOGIN_SUCCESS:
            return handleAuthorizationSuccess(state, action)
        case AUTH_LOGIN_FAIL:
            return handleAuthorizationFail(state, action)
        default:
            return state
    }
}

export default reducer;