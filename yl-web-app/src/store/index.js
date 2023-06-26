import { configureStore } from '@reduxjs/toolkit'

const defaultState = {
    inputValue: '123',
    list: [{ username: "admin", password: "123456" }]
};

function userReducer(state = defaultState, action) {
    if (action.type === 'counter/changeUserPassword') {
        return {
            state,
            list: action.payload
        }
    }
    return state
}

const store = configureStore({ reducer: userReducer })
export default store