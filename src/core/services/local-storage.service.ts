import { Injectable } from "@angular/core";
import { User } from "../../app/types/users.types";

const USERS_LOCAL_STORAGE_KEY = "users";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    getStorageUsers(): User[] {
        const storedData = localStorage.getItem(USERS_LOCAL_STORAGE_KEY);
        return storedData ? JSON.parse(storedData) : [];
    }

    setUsersToStorage(users: User[]): void {
        localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users));
    }
}
