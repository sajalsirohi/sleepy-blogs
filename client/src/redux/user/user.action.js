import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: {
        ...user,
    }
});
export const logoutUser = {
    type: UserActionTypes.ERASE_CURRENT_USER_SESSION,
}
