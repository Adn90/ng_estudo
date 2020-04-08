import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CourseComponent } from "./course.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { FormsModule } from "@angular/forms";
import { StarModule } from '../shared/components/star/star.module';
import { PipeModule } from '../shared/pipe/pipe.module';


@NgModule({
  declarations: [
    CourseComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
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
