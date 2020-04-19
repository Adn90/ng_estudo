import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css']
})
export class FuncComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';

  @Input() valor: number = 0;

  // passar eventos p/ frente
  @Output() mudouValor = new EventEmitter();

  //ciclos
  @Input() valorInicial = 10;


  //viewChild
  // só ver o nome, ele faz com que o pai, veja uma var no componente filho
  // era antes HTMLElement. Com o console.log foi visto qual é o tipo correto para essa var
  // agora é possível mudar o valor com o incrementa decrementa, pela referência feita no campo HTML, no caso o #campoInput
  // com o ViewChild e a variavel local(#campoInput), modifica o valor, sem ngModel ou property bind
  @ViewChild('campoInput') campoValorInput: ElementRef; //HTMLElement

  constructor() { 
    this.log('Construtor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  decrementa() {
    //this.valor --;
    this.campoValorInput.nativeElement.value++;
    //emit de emitir evento; passa info p/ componente pai
    this.mudouValor.emit({ novoValor: this.valor});
  }

  incrementa() {
    console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  /*

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
 
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  */
  private log(hook: string) {
    console.log(hook);
  }



}
