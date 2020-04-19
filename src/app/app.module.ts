import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FuncionarioDetalheComponent } from "./funcionario-detalhe/funcionario-detalhe.component";
import { FuncionarioService } from "./funcionario.service";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

import { CourseModule } from './course/course.module';
import { CoreModule } from './core/core.module';
import { FuncComponent } from './funcionario-detalhe/func/func.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioDetalheComponent,
    FuncComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
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
