import { createAction, props } from "@ngrx/store";
import { User } from "../../types/users.types";

export const loadUsers = createAction("[Users Feature] Load Users");
export const loadUsersSuccess = createAction("[Users Feature] Load Users Success", props<{ users: User[] }>());
export const loadUsersFailed = createAction("[Users Feature] Load Users Failed", props<{ error: Error }>());

export const saveUser = createAction("[Users Feature] Save User", props<{ user: User }>());
export const saveUserSuccess = createAction("[Users Feature] Save User Success", props<{ user: User }>());
export const saveUserFailed = createAction("[Users Feature] Save User Failded", props<{ error: Error }>());

export const deleteUser = createAction("[Users Feature] Delete User", props<{ id: number }>());
export const deleteUserSuccess = createAction("[Users Feature] Delete User Success", props<{ id: number }>());
export const deleteUserFailed = createAction("[Users Feature] Delete User Failded", props<{ error: Error }>());
