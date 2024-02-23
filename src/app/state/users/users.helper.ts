import { User } from "../../types/users.types";
import { UsersState } from "./users.reducer";

function isNewUser(id: number): boolean {
    return id >= 100;
}

export const addOrUpdateUserState = (state: UsersState, newUser: User) => {
    if (isNewUser(newUser.id)) {
        return { ...state, users: [...state.users, newUser] };
    }

    return {
        ...state,
        users: state.users.map((user) => (user.id === newUser.id ? { ...newUser } : { ...user })),
    };
};
