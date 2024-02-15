import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../../../types/users.types";

@Injectable({
    providedIn: "root",
})
export class UsersApiService {
    private readonly userApiUrl: string = "https://jsonplaceholder.typicode.com/users";

    constructor(private readonly http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return (this.http.get(this.userApiUrl) as Observable<User[]>) ?? [];
    }
}
