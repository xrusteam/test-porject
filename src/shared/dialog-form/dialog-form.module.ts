import { NgModule } from "@angular/core";
import { DialogFormComponent } from "./dialog-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const materialModule = [MatDialogModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, materialModule],
    declarations: [DialogFormComponent],
    exports: [DialogFormComponent],
})
export class DialogFormModule {}
