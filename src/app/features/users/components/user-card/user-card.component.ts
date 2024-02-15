import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../../../types/users.types";

@Component({
    selector: "app-user-card",
    templateUrl: "./user-card.component.html",
    styleUrl: "./user-card.component.scss",
})
export class UserCardComponent {
    @Input() public user!: User;

    @Output() delete: EventEmitter<number> = new EventEmitter<number>();
    onDelete(id: number) {
        this.delete.emit(id);
    }
}
