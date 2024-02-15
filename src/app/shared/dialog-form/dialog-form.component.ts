import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export interface DialogData {
    title: string;
    content: string;
}

@Component({
    selector: "app-dialog-form",
    templateUrl: "./dialog-form.component.html",
    styleUrl: "./dialog-form.component.scss",
})
export class DialogFormComponent {
    constructor(
        private readonly dialogRef: MatDialogRef<DialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    closeDialog(): void {
        this.dialogRef.close();
    }
}
