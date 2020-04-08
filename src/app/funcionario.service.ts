import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  getFuncionarios() {
    return [
      {"id": 1, "nome": "João" , "idade": 31},
      {"id": 2, "nome": "Maria", "idade": 26},
      {"id": 3, "nome": "Pedro", "idade": 21},
      {"id": 4, "nome": "Júlia", "idade": 17},
    ];
  }
}
