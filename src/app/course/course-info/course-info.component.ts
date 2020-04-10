import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Course } from "../course";
import { CourseService } from "../servico/course.service";
import { ValidarCamposService } from '../servico/validar-campos.service';

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

  // _validarCampo é public, pois vai ser utilizado no html
  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    public validarCampo: ValidarCamposService,
  ) {}

  get f() { return this.cadastro.controls; }

  ngOnInit(): void {
    this.carregarDados();
    this.createForm();
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

  save() {
    this.cadastro.markAllAsTouched();
    this.submitted = true;
    if (this.cadastro.invalid) {
      return;
    }
    this._courseService.save(this.course).subscribe({
      next: (course) => console.log("saved", course),
      error: (err) => console.log("error", err),
    });
  }


  resetForm() {
    this.cadastro.reset();
  }


  createForm() {
    this.cadastro = this.fb.group({
      name: ['this.course.name', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      price: [0, [Validators.required]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      description: ['this.course.description', [Validators.required, Validators.minLength(20), Validators.maxLength(256)]],
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

  