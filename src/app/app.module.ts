import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./features/users/components/users/users.component";
import { UserCardComponent } from "./features/users/components/user-card/user-card.component";
import { HomeComponent } from "./features/home/home.component";
import { DialogFormModule } from "../shared/dialog-form/dialog-form.module";

@NgModule({
    declarations: [AppComponent, UsersComponent, UserCardComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, DialogFormModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
