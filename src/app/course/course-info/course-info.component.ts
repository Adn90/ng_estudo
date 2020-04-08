import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../servico/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  // courseId: number;
  course: Course;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    ) { }

  ngOnInit(): void {
    // + converter p/ number
    // snapshot 'tira foto da rota, neste momento' 
    // ActivatedRoute - pega a rota no exato momento
    // this.course = this._activatedRoute.snapshot.paramMap.get('id');
   this._courseService.retriveById(+this._activatedRoute.snapshot.paramMap.get('id')).subscribe({
     next: course => this.course = course,
     error: err => console.log("error", err)
   });
  }

  save() {
    this._courseService.save(this.course).subscribe({
      next: course => console.log("saved", course),
      error: err => console.log("error", err)
    });
  }


}
