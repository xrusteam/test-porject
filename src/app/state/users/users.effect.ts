import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, of } from "rxjs";
import * as UsersActions from "../users/users.actions";
import { UsersService } from "../../features/users/services/users.service";
import { UsersApiService } from "../../features/users/services/users-api.service";
import { LocalStorageService } from "../../../core/services/local-storage.service";

@Injectable()
export class UsersEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly usersService: UsersService,
        private readonly usersApiService: UsersApiService,
        private readonly localStorageService: LocalStorageService
    ) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.loadUsers),
            switchMap(() =>
                this.usersApiService.getUsers().pipe(
                    map((users) => {
                        return UsersActions.loadUsersSuccess({ users });
                    }),
                    catchError((error) => of(UsersActions.loadUsersFailed({ error })))
                )
            )
        )
    );

    saveUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.saveUser),
            switchMap(({ user }) =>
                this.usersService.saveUser(user).pipe(
                    map((user) => {
                        return UsersActions.saveUserSuccess({ user });
                    }),
                    catchError((error) => of(UsersActions.saveUserFailed({ error })))
                )
            )
        )
    );

    deleteUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.deleteUser),
            switchMap(({ id }) =>
                this.usersService.deleteUser(id).pipe(
                    map(() => UsersActions.deleteUserSuccess({ id })),
                    catchError((error) => of(UsersActions.deleteUserFailed({ error })))
                )
            )
        )
    );
}
