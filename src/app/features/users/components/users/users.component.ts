import { Component, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { UsersApiService } from "../../services/users-api.service";
import { UsersService } from "../../services/users.service";
import { User } from "../../../../types/users.types";
import { MatDialog } from "@angular/material/dialog";
import { DialogData, DialogFormComponent } from "../../../../shared/dialog-form/dialog-form.component";

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
        private readonly dialog: MatDialog
    ) {}

    public ngOnInit(): void {
        this.subscription$ = this.usersApiService.getUsers().subscribe((users) => {
            this.usersService.users = users;
            this.users = this.usersService.users;
        });
    }

    public ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

    public trackByFn() {}

    public onDelete(id: number): void {
        this.usersService.deleteUser(id);
        this.users = this.usersService.users;
    }

    openDialog(): void {
        const dialogRef = this.dialog.open<DialogFormComponent, DialogData>(DialogFormComponent, {
            width: "250px",
            data: {
                title: "cdc",
                content: "dcfd",
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
