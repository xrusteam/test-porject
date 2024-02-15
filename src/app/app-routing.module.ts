import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./features/users/components/users/users.component";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "users",
        component: UsersComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
