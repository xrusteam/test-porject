import { Injectable } from "@angular/core";
import { User } from "../../../types/users.types";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    public users: User[] = [];

    public deleteUser(id: number): void {
        this.users = this.users.filter((user) => user.id !== id);
    }
}
