import { Injectable } from "@angular/core";
import { User } from "../../../types/users.types";
import { userDTO } from "../../../helpers/user-dto";
import { LocalStorageService } from "../../../../core/services/local-storage.service";
import { Observable, of } from "rxjs";

let uniqId = 100;

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor(private readonly localStorageService: LocalStorageService) {}

    public deleteUser(id: number): Observable<number> {
        return of(id);
    }

    public saveUser(formValues: any): Observable<User> {
        if (this.isNewUser(formValues.id)) {
            return this.addUser(formValues);
        } else {
            return this.updateUser(formValues);
        }
    }

    private updateUser(editedUser: User): Observable<User> {
        return of(editedUser);
    }

    private addUser(formValues: any) {
        const newUser: User = {
            id: uniqId++,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            ...userDTO,
        };
        return of(newUser);
    }

    private isNewUser(id: number): boolean {
        return !id || id === 0;
    }

    private getUsersFromLocalStorage(): User[] {
        const storedUsers = this.localStorageService.getStorageUsers();

        return storedUsers.length > 0 ? storedUsers : [];
    }
}
