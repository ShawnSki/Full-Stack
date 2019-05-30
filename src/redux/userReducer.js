
const initialState = {
    username: '',
    firstname: '',
    lastname: '',
    balance: null,
    id: null
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            console.log(action.payload)
            return state
        default:
            return state
    }
}

export default reducer;