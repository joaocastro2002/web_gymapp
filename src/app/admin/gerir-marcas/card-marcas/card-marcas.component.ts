import { Component, Input, OnInit } from '@angular/core';
import { IMarca } from './marca';

@Component({
  selector: 'app-card-marcas',
  templateUrl: './card-marcas.component.html',
  styleUrls: ['./card-marcas.component.css']
})
export class CardMarcasComponent implements OnInit {
  
  constructor() { 
  }

  @Input() marca?: IMarca;
  @Input() index?: number;

  ngOnInit(): void {
  }

  verGinasios(id_marca: string) {
    console.log(id_marca)
  }

  verTreinadores(id_marca: string) {
    console.log(id_marca)
  }

  verPublicacoes(id_marca: string) {
    console.log(id_marca)
  }

}
