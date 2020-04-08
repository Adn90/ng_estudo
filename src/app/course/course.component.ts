import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./servico/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  filteredCourses: Course[];

  _courses: Course[] = [];

  _filterBy: string;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this._courseService.retriveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log("error",err)
    });
  }

  // dividir a tarefa do two-way databind

  // input
  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  // output
  get filter() {
    return this._filterBy;
  }

  
  deleteById(courseId: number): void {
    this._courseService.deletByid(courseId).subscribe({
      next: () => {
        console.log("deletado!");
        this.retriveAll();
      },
      error: err => console.log("error", err)
    })
  }
}
