import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CourseComponent } from "./course.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from '../star/star.component';

@NgModule({
  declarations: [
    CourseComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "courses",
        component: CourseComponent,
      },
      {
        path: "courses/info/:id",
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
