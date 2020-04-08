import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FuncionarioDetalheComponent } from "./funcionario-detalhe/funcionario-detalhe.component";
import { FuncionarioService } from "./funcionario.service";
import { CourseComponent } from "./course/course.component";
import { StarComponent } from "./star/star.component";
import { ReplacePipe } from "./pipe/replace.pipe";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CourseInfoComponent } from "./course/course-info/course-info.component";

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioDetalheComponent,
    CourseComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "courses",
        pathMatch: "full"
      },
      {
        path: "courses",
        component: CourseComponent
      },
      {
        path: "courses/info/:id",
        component: CourseInfoComponent
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
