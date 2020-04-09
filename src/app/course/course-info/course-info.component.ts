import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Course } from "../course";
import { CourseService } from "../servico/course.service";

@Component({
  selector: "app-course-info",
  templateUrl: "./course-info.component.html",
  styleUrls: ["./course-info.component.css"],
})
export class CourseInfoComponent implements OnInit {
  // courseId: number;
  course: Course;

  cadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.createForm(new Course());
  }

  save() {
    this._courseService.save(this.course).subscribe({
      next: (course) => console.log("saved", course),
      error: (err) => console.log("error", err),
    });
  }

  carregarDados() {
    // + converter p/ number
    // snapshot 'tira foto da rota, neste momento'
    // ActivatedRoute - pega a rota no exato momento
    // this.course = this._activatedRoute.snapshot.paramMap.get('id');
    this._courseService
      .retriveById(+this._activatedRoute.snapshot.paramMap.get("id"))
      .subscribe({
        next: (course) => (this.course = course),
        error: (err) => console.log("error", err),
      });
  }

  createForm(course: Course) {
    this.cadastro = this.fb.group({
      name: [course.name],
      price: [course.price],
      rating: [course.rating],
      description: [course.description],
    });
  }
}

/*

this.cadastro = this.fb.group({
    name: ['', Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    price: [1, Validators.required, Validators.min(1)],
    rating: [0, Validators.required, Validators.min(0), Validators.max(5)],
    description: ['']
   });

   */
