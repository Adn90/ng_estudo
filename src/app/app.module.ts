import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FuncionarioDetalheComponent } from "./funcionario-detalhe/funcionario-detalhe.component";
import { FuncionarioService } from "./funcionario.service";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioDetalheComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "courses",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent,
        pathMatch: "full"
      }
    ])
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule {}