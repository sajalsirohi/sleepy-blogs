import {UserActionTypes} from "./user.types";

const INITIAL_STATE = {
    isSessionActive: false,
    currentUser: null,
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                isSessionActive: true,
                currentUser: action.payload,
            };
        case UserActionTypes.ERASE_CURRENT_USER_SESSION:
            return {
                isSessionActive: false,
                currentUser: null
            };
        default: return state;
    }
}

export default userReducer;