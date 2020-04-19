import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {

  constructor(private _funcionarioService: FuncionarioService) { }

  url: string = 'http://loiane.com'; 
  urlImg: string = "http://lorempixel.com/400/200/nature/";

  curso: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = "abc";

  pessoa: any = {
    nome: 'def',
    idade: 18
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 5;


  valor = 5;
  deletarCiclo: boolean = false;

  public funcionarios = [];
  ngOnInit() {
    this.funcionarios = this._funcionarioService.getFuncionarios();
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clique() {
    alert("Botão clicado");
  }

  onKeyUp(evento: KeyboardEvent ) {
    console.log(evento);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMudouValor(evento) {
    console.log(evento);
  }

  mouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }


  OnMudouValor(evento) {
    console.log(evento.novoValor)
  }
  
  mudarValor() {
    this.valor++;
  }
  
  destruirCiclo() {
    this.deletarCiclo = true;
  }


}
