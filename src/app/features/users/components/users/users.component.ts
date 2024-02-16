import { Component, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { UsersApiService } from "../../services/users-api.service";
import { UsersService } from "../../services/users.service";
import { User } from "../../../../types/users.types";
import { MatDialog } from "@angular/material/dialog";
import { DialogFormComponent } from "../../../../../shared/dialog-form/dialog-form.component";
import { LocalStorageService } from "../../../../../core/services/local-storage.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrl: "./users.component.scss",
})
export class UsersComponent implements OnInit, OnDestroy {
    public users: User[] = this.usersService.users;
    private subscription$: Subscription = new Subscription();

    constructor(
        private readonly usersApiService: UsersApiService,
        private readonly usersService: UsersService,
        private readonly localStorageService: LocalStorageService,
        private readonly dialog: MatDialog
    ) {}

    public ngOnInit(): void {
        if (this.usersService.users.length === 0) {
            this.subscription$ = this.usersApiService.getUsers().subscribe((users) => {
                this.usersService.users = users;
                this.localStorageService.setUsersToStorage(users);
                this.users = this.usersService.users;
            });
        }
    }

    public ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

    public onDelete(id: number): void {
        this.usersService.deleteUser(id);
        this.users = this.getUsers();
    }

    public trackByFn(index: number, item: User): number {
        return item.id;
    }

    public openDialog(user?: User): void {
        const dialogRef = this.dialog.open<DialogFormComponent>(DialogFormComponent, {
            width: "250px",
            data: {
                user,
            },
        });

        dialogRef.afterClosed().subscribe((_) => {
            this.users = this.getUsers();
        });
    }

    private getUsers(): User[] {
        return this.usersService.users;
    }
}
