import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
      },
      {
        path: "home",
        data: { breadcrumb: "Home" },
        loadChildren: () =>
          import("../../modules/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "my-projects",
        data: { breadcrumb: "My-projects" },
        loadChildren: () =>
          import("../../modules/my-projects/my-projects.module").then(
            (m) => m.MyProjectsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
