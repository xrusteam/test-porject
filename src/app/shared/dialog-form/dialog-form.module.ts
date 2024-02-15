import { NgModule } from "@angular/core";
import { DialogFormComponent } from "./dialog-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, MatDialogModule],
    declarations: [DialogFormComponent],
    exports: [DialogFormComponent],
})
export class DialogFormModule {}
