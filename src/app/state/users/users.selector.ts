import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USERS_FEATURE_KEY, UsersState } from "./users.reducer";

export const selectUsersFeature = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

export const selectUsers = createSelector(selectUsersFeature, (state) => state.users);
