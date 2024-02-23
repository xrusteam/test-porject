import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./features/users/components/users/users.component";
import { UserCardComponent } from "./features/users/components/user-card/user-card.component";
import { HomeComponent } from "./features/home/home.component";
import { DialogFormModule } from "../shared/dialog-form/dialog-form.module";
import { USERS_FEATURE_KEY, usersReducer } from "./state/users/users.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffect } from "./state/users/users.effect";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [AppComponent, UsersComponent, UserCardComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DialogFormModule,
        StoreModule.forRoot({ users: usersReducer }),
        EffectsModule.forRoot([UsersEffect]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
