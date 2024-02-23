import { Component, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { UsersApiService } from "../../services/users-api.service";
import { UsersService } from "../../services/users.service";
import { User } from "../../../../types/users.types";
import { MatDialog } from "@angular/material/dialog";
import { DialogFormComponent } from "../../../../../shared/dialog-form/dialog-form.component";
import { LocalStorageService } from "../../../../../core/services/local-storage.service";
import { Store } from "@ngrx/store";
import { selectUsers } from "../../../../state/users/users.selector";
import { deleteUser, loadUsers } from "../../../../state/users/users.actions";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrl: "./users.component.scss",
})
export class UsersComponent {
    public users$: Observable<User[]> = this.store.select(selectUsers);

    constructor(
        private readonly usersApiService: UsersApiService,
        private readonly usersService: UsersService,
        private readonly localStorageService: LocalStorageService,
        private readonly dialog: MatDialog,
        private readonly store: Store
    ) {}

    public ngOnInit(): void {
        this.store.dispatch(loadUsers());
    }

    public onDelete(id: number): void {
        this.store.dispatch(deleteUser({ id }));
    }

    public trackByFn(_index: number, item: User): number {
        return item.id;
    }

    public openDialog(user?: User): void {
        this.dialog.open<DialogFormComponent>(DialogFormComponent, {
            width: "250px",
            data: {
                user,
            },
        });
    }
}
