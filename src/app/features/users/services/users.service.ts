import { Injectable } from "@angular/core";
import { User } from "../../../types/users.types";
import { userDTO } from "../../../helpers/user-dto";
import { LocalStorageService } from "../../../../core/services/local-storage.service";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    public users: User[] = this.getUsersFromLocalStorage();

    private uniqId = 100;

    constructor(private readonly localStorageService: LocalStorageService) {}

    public deleteUser(id: number): void {
        this.users = this.users.filter((user) => user.id !== id);
        this.localStorageService.setUsersToStorage(this.users);
    }

    public saveUser(formValues: any): void {
        if (this.isNewUser(formValues.id)) {
            this.addUser(formValues);
        } else {
            this.updateUser(formValues);
        }
        this.localStorageService.setUsersToStorage(this.users);
    }

    private updateUser(formValues: any): void {
        this.users = this.users.map((user) =>
            user.id === formValues.id
                ? { ...user, name: formValues.name, phone: formValues.phone, email: formValues.email }
                : { ...user }
        );
    }

    private addUser(formValues: any) {
        const newUser: User = {
            id: this.uniqId++,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            ...userDTO,
        };

        this.users = [...this.users, newUser];
    }

    private isNewUser(id: number): boolean {
        return !id || id === 0;
    }

    private getUsersFromLocalStorage(): User[] {
        const storedUsers = this.localStorageService.getStorageUsers();

        return storedUsers.length > 0 ? storedUsers : [];
    }
}
