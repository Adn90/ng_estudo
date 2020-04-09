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

  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.createForm();
  }

  save() {
    this._courseService.save(this.course).subscribe({
      next: (course) => console.log("saved", course),
      error: (err) => console.log("error", err),
    });
  }

  get f() { return this.cadastro.controls; }

  save2(): void {
    this.submitted = true;
    if (this.cadastro.invalid) {
      return;
    }

    console.log(JSON.stringify(this.cadastro.value, null, 4));
  }

  resetForm() {
    this.cadastro.reset();
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

  createForm() {
    this.cadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: [0, [Validators.required]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(256)]],
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

   /*
    createForm(course: Course) {
    this.cadastro = this.fb.group({
      name: [course.name],
      price: [course.price],
      rating: [course.rating],
      description: [course.description],
    });
  }
  */