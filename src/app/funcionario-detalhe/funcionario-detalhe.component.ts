import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {

  constructor(private _funcionarioService: FuncionarioService) { }

  public funcionarios = [];
  ngOnInit() {
    this.funcionarios = this._funcionarioService.getFuncionarios();
  }

}
