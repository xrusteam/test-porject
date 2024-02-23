import { createReducer, on } from "@ngrx/store";
import { User } from "../../types/users.types";
import * as UsersActions from "./users.actions";
import { addOrUpdateUserState } from "./users.helper";

export const USERS_FEATURE_KEY = "users";

export interface UsersState {
    users: User[];
    isLoading: boolean;
    error: Error | null;
}

export const initialUserState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
};

export const usersReducer = createReducer(
    initialUserState,
    on(UsersActions.loadUsers, (state) => ({ ...state, isLoading: true })),
    on(UsersActions.loadUsersSuccess, (state, payload) => ({ ...state, users: payload.users, isLoading: false })),
    on(UsersActions.loadUsersFailed, (state, payload) => ({ ...state, isLoading: false, error: payload.error })),

    on(UsersActions.saveUserSuccess, (state, payload) => addOrUpdateUserState(state, payload.user)),
    on(UsersActions.saveUserFailed, (state, payload) => ({ ...state, error: payload.error })),

    on(UsersActions.deleteUserSuccess, (state, payload) => ({
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
    })),
    on(UsersActions.deleteUserFailed, (state, payload) => ({ ...state, error: payload.error }))
);
