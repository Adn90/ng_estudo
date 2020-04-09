import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, NotFoundComponent],
})
export class CoreModule {}
