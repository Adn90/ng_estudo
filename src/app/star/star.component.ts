import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  // recebe valor de outro componente 
  @Input()
  rating: number = 0;

  starWidth: number;

  constructor() { }

  // Inicia quando existe mudança entre componentes
  // ex: o http trabalha de forma assíncrona, então a infono rating será modificada, qnd a info vier completa
  ngOnChanges(): void {
    // calc para fazer as estrelas
    this.starWidth = this.rating * 74 /5;
  }

}
