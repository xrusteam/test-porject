import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsersService } from "../../app/features/users/services/users.service";
import { User } from "../../app/types/users.types";

@Component({
    selector: "app-dialog-form",
    templateUrl: "./dialog-form.component.html",
    styleUrl: "./dialog-form.component.scss",
})
export class DialogFormComponent implements OnInit {
    public userFormGroup: FormGroup = new FormGroup({});
    public buttonTitle: string = this.data.user ? "Сохранить" : "Создать";

    constructor(
        private readonly usersService: UsersService,
        private readonly dialogRef: MatDialogRef<DialogFormComponent>,
        private readonly formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data: { user: User }
    ) {}

    public ngOnInit(): void {
        this.initFormData();

        if (this.data) this.userFormGroup.patchValue(this.data.user);
    }

    public onSubmit(): void {
        const formData = this.userFormGroup.value;

        this.usersService.saveUser(formData);
        this.onClose();
    }

    public onClose(): void {
        this.dialogRef.close();
    }

    private initFormData(): void {
        this.userFormGroup = this.formBuilder.group({
            id: new FormControl(0),
            name: new FormControl(""),
            phone: new FormControl(""),
            email: new FormControl(""),
        });
    }
}
